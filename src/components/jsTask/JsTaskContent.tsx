import React, {FunctionComponent, useEffect, useState} from "react";
import {
    CodeEditorError,
    CodeEditorPanel,
    CodeEditorPanelBtn,
    TaskContentWrapper,
    TaskSuccessfulBar,
    TaskSuccessfulImg,
    TaskSuccessfulTitle,
    WebBrowserGreenBox,
    WebBrowserRedBox,
    WebBrowserTopBar,
    WebBrowserWindow,
    WebBrowserYellowBox,
    MobileTaskContentWrapper,
    MobileTaskDetailsWrapper,
    MobileTaskDetail,
    MobileTaskEditorWrapper,
    MobileTaskResult
} from "../../style/elements/tasks/task";
import {IFPropsJsTask} from "../../types/types";
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-ambiance'
import 'ace-builds/src-noconflict/theme-clouds'
import 'ace-builds/src-noconflict/theme-chaos'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/theme-solarized_light'
import 'ace-builds/src-noconflict/theme-crimson_editor'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/webpack-resolver'
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/python";
import {
    JsCodeEditorWrapper,
    JsIntroduction,
    JsResult,
    JsTargets,
    JsConsoleWrapper,
    JsTaskSuccessful,
    JsDecorationIntroduction
} from "../../style/elements/tasks/jsTask";
import AceEditor from "react-ace";
import {
    getEditorFSize,
    getEditorTheme,
    saveJsTaskSolutionToLS, saveSolvedTaskToLS
} from "../../functions/localStorage";
import {Console, Hook, Unhook} from 'console-feed'
import {Logs} from "../../functions/jsConsole";
import {taskValidationJS} from "../../functions/taskValidationJS";
import {Link} from "react-router-dom";
import {jsClass} from "../../properties/jsClass";
import {TaskIntroduction} from "../task/TaskIntroduction";
import {TaskTargets} from "../task/TaskTargets";
import {TaskAceEditorSettings} from "../task/TaskAceEditorSettings";
import {formatCode} from "../../functions/formatCode";

/**
 * Component with the main content for js task -> targets, introduction, editor.
 * @param task - task data (targets, introduction, code, solution...)
 * @param allTaskLength - number of all task of particular type
 */
export const JsTaskContent: FunctionComponent<IFPropsJsTask> = ({task, allTaskLength}): JSX.Element => {

    // state with userCode from editor output
    const [userCode, setUserCode] = useState<string>(task.code);

    // state with annotations from editor, which are used to check the user code for errors
    const [annotations, setAnnotations] = useState<any[]>([]);

    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false);

    // state with console logs, which are passed into Console component
    const [logs, setLogs] = useState<any[]>([]);

    // state with flag, which is responsible for animation when the user correctly completes the task targets
    const [successfulFlag, setSuccessfulFlag] = useState<boolean>(false);

    // state with flag, which is responsible for displaying error about user code
    const [errorFlag, setErrorFlag] = useState<boolean>(false);

    // state with editor settings, which are passed into ace editor component
    const [editorSettings, setEditorSettings] = useState<{ fontSize: number, theme: string }>({
        fontSize: getEditorFSize(),
        theme: getEditorTheme()
    });

    // width of the window on which the corresponding content will be rendered to the device,
    // for devices below 768px width there is a different arrangement of elements
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // set the windowWidth state
    const resizeWindow = (): void => setWindowWidth(window.innerWidth);
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    // when the user solves the task correctly, scroll up to know that he did it correctly.
    // This works for mobile devices
    useEffect(() => {
        windowWidth <= 768 && successfulFlag && window.scrollTo(0, 0);
    }, [successfulFlag]);


    // save editor settings into local storage, when the user changes it
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorSettings.fontSize.toString())
        localStorage.setItem("editorTheme", editorSettings.theme)
    }, [editorSettings]);


    // run once!, logic responsible for converting a string into an array of data that
    // contains console logs and is passed to the state, which in turn is passed into Console component
    // @ts-ignore
    useEffect(() => {
        Hook(
            window.console,
            (log) => {
                // @ts-ignore
                if (log.method === "log") {
                    setLogs((currLogs) => [...currLogs, log])
                }
            },
            false,
        )
        // @ts-ignore
        return () => Unhook(window.console)
    }, []);

    // remove error when user type new code
    useEffect(() => {
        setErrorFlag(false)
    }, [annotations]);

    // change editor font-size
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        fontSize: parseFloat(e.target.value)
    }));

    // change theme
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        theme: e.target.value
    }));

    // change code from
    const changeUserCode = (newValue: string): void => setUserCode(newValue)

    // reset code in editor by original code from task
    const handleResetCode = (): void => {
        return setUserCode(formatCode("js", task.originalCode));
    };

    // change editorFormFlag -> show or hide editor settings form
    const handleToggleEditorSettings = () => setEditorFormFlag(!editorFormFlag);

    // function responsible for task validation checks if all targets of the task have been met,
    // if so, it shows a screen about the correct execution of the task. It works only when user code
    // dont have errors
    const checkTask = () => {
        if (annotations.length === 0) {

            // format user code
            setUserCode(formatCode("js", userCode));

            // prevent of console duplicates
            setLogs([]);

            // transform user code to ready to display,
            // the display of the user code is handled by the above defined useEffect
            Logs(userCode);

            // points needed to pass
            const pointsNeeded: number = task.targets.length;

            // user points
            let userPoints = 0;

            // function that add pun when user complete task correctly
            const changeUserPoints = (): number => userPoints++;

            //  checking each solution to a task is equal to the user's solution, at the end set updated taskTargets state
            //  depending by task is solved correctly or not (checkboxes in task targets list will change their colors)
            task.targets.forEach(el => taskValidationJS(userCode, el, changeUserPoints));

            // save solution into local storage, so when user comes back he will have their solution
            saveJsTaskSolutionToLS(task.targets, task.title, userCode);

            // check if user has executed all targets, if he did display animation
            if (userPoints === pointsNeeded) {
                // set the animation
                setSuccessfulFlag(true);
                // save solved task title to ls, so that the user knows which tasks he has completed
                saveSolvedTaskToLS(task.title, "solvedJsTasks");
            } else {
                setSuccessfulFlag(false);
            }
        }
        // display the error window when user code have warnings
        else {
            setErrorFlag(true);
        }
    };

    return <>
        {windowWidth > 768 && <TaskContentWrapper>

            {/*when the user successfully completes the task, these elements are hidden and an animation is displayed*/}
            {successfulFlag === false && <>
                {/*introduction*/}
                <JsIntroduction>
                    <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                      imgAlt={jsClass.getFigureAlt()} imgSrc={jsClass.getFigureSrc()}/>

                    {/*decorations*/}
                    <JsDecorationIntroduction/>
                </JsIntroduction>

                {/*targets*/}
                <JsTargets>
                    <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid}/>
                </JsTargets>
            </>}

            {/*animation which notifies the user that the task has been successfully completed*/}
            {successfulFlag && <JsTaskSuccessful>
                <TaskSuccessfulImg src={jsClass.getFigureSrc()} alt={jsClass.getFigureAlt()}/>
                <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>
                <TaskSuccessfulBar color="#b5179e">

                    {/*user has a choice to stay with the task or move to another task if there is one*/}
                    <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                    {task.number < allTaskLength && <Link to={`/js-task/${task.number + 1}`}>Next task</Link>}

                </TaskSuccessfulBar>
            </JsTaskSuccessful>}

            {/*console with user code*/}
            <JsResult>
                <WebBrowserWindow>
                    <WebBrowserTopBar>
                        <WebBrowserGreenBox/>
                        <WebBrowserYellowBox/>
                        <WebBrowserRedBox/>
                    </WebBrowserTopBar>
                    <JsConsoleWrapper>
                        <Console logs={logs} variant="light"/>
                    </JsConsoleWrapper>
                </WebBrowserWindow>
            </JsResult>

            {/*editor*/}
            <JsCodeEditorWrapper>
                {/*code editor - ace*/}
                <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={changeUserCode}
                    mode="javascript"
                    theme={editorSettings.theme}
                    width="100%"
                    height="100%"
                    value={userCode}
                    fontSize={editorSettings.fontSize}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    onValidate={vl => setAnnotations(vl.filter((el: any) => el.type === "error"))}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                />

                {/*editor panel where the user can change settings, check his solution or reset the code*/}
                <CodeEditorPanel>

                    {/*change the settings form*/}
                    {editorFormFlag &&
                    <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                                           handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                                           toggleForm={handleToggleEditorSettings}/>}

                    {/*buttons*/}
                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}><i
                        className="fas fa-cogs"/> Settings</CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={handleResetCode}><i className="fas fa-eraser"/> Reset
                    </CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>

                </CodeEditorPanel>

                {/*Notification that user code contains errors*/}
                {errorFlag &&
                <CodeEditorError><i className="fas fa-exclamation-circle"/>Check your code</CodeEditorError>}

            </JsCodeEditorWrapper>

        </TaskContentWrapper>}


        {/*content for mobile devices*/}
        {windowWidth <= 768 && <MobileTaskContentWrapper>

            {/*task introduction and targets*/}
            <MobileTaskDetailsWrapper>
                <MobileTaskDetail>

                    {/*when the user successfully completes the task, these elements are hidden and an animation is displayed*/}
                    {successfulFlag === false && <>

                        <JsIntroduction>

                            {/*introduction*/}
                            <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                              imgAlt={jsClass.getFigureAlt()} imgSrc={jsClass.getFigureSrc()}/>


                            {/*decorations*/}
                            <JsDecorationIntroduction/>

                        </JsIntroduction>
                    </>}

                    {/*animation which notifies the user that the task has been successfully completed*/}
                    {successfulFlag && <JsTaskSuccessful>

                        <TaskSuccessfulImg src={jsClass.getFigureSrc()} alt={jsClass.getFigureAlt()}/>
                        <TaskSuccessfulTitle>Congratulations, you have completed the task
                            correctly</TaskSuccessfulTitle>

                        <TaskSuccessfulBar color="#b5179e">
                            {/*user has a choice to stay with the task or move to another task if there is one*/}
                            <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                            {task.number < allTaskLength && <Link to={`/js-task/${task.number + 1}`}>Next task</Link>}
                        </TaskSuccessfulBar>
                    </JsTaskSuccessful>}

                </MobileTaskDetail>

                {/*task target and instructions*/}
                <MobileTaskDetail>
                    <JsTargets>
                        <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid}/>
                    </JsTargets>
                </MobileTaskDetail>

            </MobileTaskDetailsWrapper>

            {/*editor*/}
            <MobileTaskEditorWrapper>
                {/*code editor - ace*/}
                <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={changeUserCode}
                    mode="javascript"
                    theme={editorSettings.theme}
                    width="100%"
                    height="100%"
                    value={userCode}
                    fontSize={editorSettings.fontSize}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    onValidate={vl => setAnnotations(vl.filter((el: any) => el.type === "error"))}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                />

                {/*editor panel where the user can change settings, check his solution or reset the code*/}
                <CodeEditorPanel>

                    {/*change the settings form*/}
                    {editorFormFlag &&
                    <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                                           handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                                           toggleForm={handleToggleEditorSettings}/>}

                    {/*buttons*/}
                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}><i
                        className="fas fa-cogs"/> Settings</CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={handleResetCode}><i className="fas fa-eraser"/> Reset
                    </CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>

                    {/*Notification that user code contains errors*/}
                </CodeEditorPanel>
                {errorFlag &&
                <CodeEditorError><i className="fas fa-exclamation-circle"/>Check your code</CodeEditorError>}
            </MobileTaskEditorWrapper>

            {/*console with user code*/}
            <MobileTaskResult>
                <WebBrowserWindow>
                    <WebBrowserTopBar>
                        <WebBrowserGreenBox/>
                        <WebBrowserYellowBox/>
                        <WebBrowserRedBox/>
                    </WebBrowserTopBar>
                    <JsConsoleWrapper>
                        <Console logs={logs} variant="light"/>
                    </JsConsoleWrapper>
                </WebBrowserWindow>
            </MobileTaskResult>
        </MobileTaskContentWrapper>}
    </>
}
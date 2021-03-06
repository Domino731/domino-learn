import AceEditor from "react-ace"
import 'ace-builds/src-noconflict/mode-html'
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
import { FunctionComponent, useEffect, useState } from "react";
import {
    HtmlTaskIntroduction,
    HtmlTaskTarget,
    HtmlTaskCodeEditor,
    HtmlTaskResult,
    HtmlDecorationIntroduction,
    HtmlTaskSuccessful
} from "../../style/elements/tasks/htmlTask";
import {
    TaskContentWrapper,

    CodeEditorPanel,
    CodeEditorPanelBtn,
    TaskSuccessfulImg,
    TaskSuccessfulBar,
    TaskSuccessfulTitle,
    CodeEditorError,
    MobileTaskContentWrapper,
    MobileTaskDetailsWrapper,
    MobileTaskDetail,
    MobileTaskEditorWrapper,
    MobileTaskResult
} from "../../style/elements/tasks/task";
import { HTMLData } from "../../properties/htmlData";
import {
    getEditorFSize,
    getEditorTheme, removeSolvedTaskFormLS,
    saveHtmlTaskSolutionToLS, saveSolvedTaskToLS
} from "../../functions/localStorage";
import { Link } from "react-router-dom";
import { IFHtmlTask, IFPropsHtmlTaskContent } from "../../types/types";
import { taskValidationHtml } from "../../functions/taskValidationHtml";
import { TaskIntroduction } from "../task/TaskIntroduction";
import { TaskTargets } from "../task/TaskTargets";
import { TaskAceEditorSettings } from "../task/TaskAceEditorSettings";
import { TaskResultWindow } from "../task/TaskResultWindow";
import settingsIcon from "../../images/settings_icon.svg";
import resetIcon from "../../images/reset_icon.svg";
import runIcon from "../../images/play_icon.svg";

/**
 * Component with the main content for html task -> targets, introduction, editor.
 * @param task - task data (targets, introduction, code, solution...)
 * @param allTaskLength - number of all task of particular type
 */
export const HtmlTaskContent: FunctionComponent<IFPropsHtmlTaskContent> = ({
    taskData,
    allTaskLength
}): JSX.Element | null => {

    // state with task data
    const [task, setTask] = useState<IFHtmlTask>(taskData);

    // state with userCode from editor output
    const [userCode, setUserCode] = useState<string>(task.code);

    // state with annotations from editor, which are used to check the user code for errors
    const [annotations, setAnnotations] = useState<any[]>([]);

    // flag to toggle container with settings
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false);

    // state with editor settings, which are passed into ace editor component
    const [editorSettings, setEditorSettings] = useState<{ fontSize: number, theme: string }>({
        fontSize: getEditorFSize(),
        theme: getEditorTheme()
    });

    // state with flag, which is responsible for animation when the user correctly completes the task targets
    const [successfulFlag, setSuccessfulFlag] = useState<boolean>(false);

    // state with flag, which is responsible for displaying error about user code
    const [errorFlag, setErrorFlag] = useState<boolean>(false);

    // width of the window on which the corresponding content will be rendered to the device,
    // for devices below 768px width there is a different arrangement of elements
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // code that is passed to iframe window
    const [srcDoc, setSrcDoc] = useState<string>(`<!DOCTYPE html>
          <html lang="en">
          <head>
          <title>${task.title}</title>
          </head>
          <body></body>
          </html>`);

    // save editor settings into local storage, when the user changes it
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorSettings.fontSize.toString());
        localStorage.setItem("editorTheme", editorSettings.theme);
    }, [editorSettings]);

    // set the windowWidth state
    const resizeWindow = (): void => setWindowWidth(window.innerWidth);
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    // when the user solves the task correctly, scroll up to know that he did it correctly.
    // This works mainly for mobile devices
    useEffect(() => {
        windowWidth <= 768 && successfulFlag && window.scrollTo(0, 0);
    }, [successfulFlag]);

    // remove error when user type new code
    useEffect(() => {
        return setErrorFlag(false);
    }, [annotations]);

    /** change editor font-size  */
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        fontSize: parseFloat(e.target.value)
    }));

    /** change theme state  */
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        theme: e.target.value
    }));

    /** change usercode stete */
    const changeUserCode = (newValue: string): void => {
        setUserCode(newValue)
    };

    /** reset code in editor by original code from task */
    const handleResetCode = (): void => setUserCode(task.originalCode);

    /** change editorFormFlag -> toggle container with editor settings */
    const handleToggleEditorSettings = () => setEditorFormFlag(!editorFormFlag);

    // function responsible for task validation, It checks if all targets of the task have been extecuted by user,
    // if yes, then shows a screen about the correct execution of the task. It works only when user code
    // doesnt have errors
    const checkTask = (): void => {

        // start the task checking only if the user code does not contain errors
        if (annotations.length === 0) {

            // set the code which will be passed into iframe window (display user code)
            setSrcDoc(`
          <!DOCTYPE html>
          <html lang="en">
          <head><title>${task.title}</title></head>
          <body>${userCode}</body>
             </html>`)

            // points needed to complete the task
            const pointsNeeded: number = task.targets.length;

            // user points
            let userPoints: number = 0;

            // function that add point when user complete the particular target correctly
            const changeUserPoints = (): number => userPoints++;

            //  checking each solution to a task is equal to the user's solution
            task.targets.forEach(el => taskValidationHtml(userCode, el, changeUserPoints));

            // save task progress into local storage, so when user comes back he will have his task status from last session
            saveHtmlTaskSolutionToLS(task.targets, task.title, userCode);

            // check if user has executed all targets, if he did then display animation
            if (userPoints === pointsNeeded) {
                
                // set the animation
                setSuccessfulFlag(true);

                // save task title into localStorage, so user will be know he was completed this task (task link will be have green background color
                return saveSolvedTaskToLS(task.title, "solvedHtmlTasks");
            } else {
                setSuccessfulFlag(false);

                // remove this task from solved in local storage
                return removeSolvedTaskFormLS(task.title, "solvedHtmlTasks")
            }
        } else {
            return setErrorFlag(true);
        }
    }






    return <>

        {/* for devies above 768px */}
        {windowWidth > 768 && <TaskContentWrapper>

            {/*when the user successfully completes the task, these elements are hidden and an animation is displayed*/}
            {successfulFlag === false && <>

                {/*introduction*/}
                <HtmlTaskIntroduction>
                    <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                        imgAlt={HTMLData.getFigureAlt()} imgSrc={HTMLData.getFigureSrc()} />
                    {/*decoration*/}
                    <HtmlDecorationIntroduction />
                </HtmlTaskIntroduction>

                {/*task target and instructions*/}
                <HtmlTaskTarget>
                    <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid} />
                </HtmlTaskTarget>
            </>}

            {/*animation when user solves the task correctly*/}
            {successfulFlag && <HtmlTaskSuccessful>
                <TaskSuccessfulImg src={HTMLData.getFigureSrc()} alt={HTMLData.getFigureAlt()} />
                <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>
                <TaskSuccessfulBar color="#ffca3a">
                    <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                    {task.number < allTaskLength && <Link to={`/html-task/${task.number + 1}`}>Next task</Link>}
                </TaskSuccessfulBar>
            </HtmlTaskSuccessful>}


            {/*editor*/}
            <HtmlTaskCodeEditor>
                {/* ace code editor*/}
                <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={changeUserCode}
                    onValidate={vl => setAnnotations(vl.filter((el: any) => el.type === "error"))}
                    mode="html"
                    theme={editorSettings.theme}
                    width="100%"
                    height="100%"
                    value={userCode}
                    fontSize={editorSettings.fontSize}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                />

                {/*editor panel where the user can change settings, run his code or reset this code*/}
                <CodeEditorPanel>

                    {/*container with settings for editor*/}
                    {editorFormFlag &&
                        <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                            handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                            toggleForm={handleToggleEditorSettings} />}

                    {/*action buttons*/}
                    {/* toggle settings container*/}
                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}>
                       <img src={settingsIcon} alt='Gears'/> Settings</CodeEditorPanelBtn>

                    {/* reset code  */}
                    <CodeEditorPanelBtn onClick={handleResetCode}> <img src={resetIcon} alt='Erase'/>  Reset </CodeEditorPanelBtn>

                    {/* run code */}
                    <CodeEditorPanelBtn onClick={checkTask}> <img src={runIcon} alt='Play'/>  Run </CodeEditorPanelBtn>

                </CodeEditorPanel>

                {/*Notification that user code contains errors*/}
                {errorFlag &&
                    <CodeEditorError><i className="fas fa-exclamation-circle" />Check your code</CodeEditorError>}

            </HtmlTaskCodeEditor>

            {/*iframe with user's code*/}
            <HtmlTaskResult>
                <TaskResultWindow srcDoc={srcDoc} />
            </HtmlTaskResult>

        </TaskContentWrapper>}







        {/*content for mobile devices*/}
        {windowWidth <= 768 && <MobileTaskContentWrapper>

            {/*task introduction and targets*/}
            <MobileTaskDetailsWrapper>

                <MobileTaskDetail>

                    {/*when the user successfully completes the task, these elements are hidden and an animation is displayed*/}
                    {successfulFlag === false && <>
                        <HtmlTaskIntroduction>

                            {/*introduction*/}
                            <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                imgAlt={HTMLData.getFigureAlt()} imgSrc={HTMLData.getFigureSrc()} />

                            {/*decorations*/}
                            <HtmlDecorationIntroduction />

                        </HtmlTaskIntroduction>
                    </>}

                    {/*animation which notifies the user that the task has been successfully completed*/}
                    {successfulFlag && <HtmlTaskSuccessful>

                        <TaskSuccessfulImg src={HTMLData.getFigureSrc()} alt={HTMLData.getFigureAlt()} />
                        <TaskSuccessfulTitle>Congratulations, you have completed the task
                            correctly</TaskSuccessfulTitle>

                        <TaskSuccessfulBar color="#ffca3a">
                            {/*user has a choice to stay with the task or move to another task if there is one*/}
                            <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                            {task.number < allTaskLength && <Link to={`/html-task/${task.number + 1}`}>Next task</Link>}
                        </TaskSuccessfulBar>

                    </HtmlTaskSuccessful>}
                </MobileTaskDetail>

                {/*task target and instructions*/}
                <MobileTaskDetail>
                    <HtmlTaskTarget>
                        <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid} />
                    </HtmlTaskTarget>
                </MobileTaskDetail>

            </MobileTaskDetailsWrapper>

            {/*editor*/}
            <MobileTaskEditorWrapper>
                <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={changeUserCode}
                    onValidate={vl => setAnnotations(vl.filter((el: any) => el.type === "error"))}
                    mode="html"
                    theme={editorSettings.theme}
                    width="100%"
                    height="100%"
                    value={userCode}
                    fontSize={editorSettings.fontSize}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
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
                            toggleForm={handleToggleEditorSettings} />}

                    {/*buttons*/}
                    {/* toggle container with settings */}
                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}>
                    <img src={settingsIcon} alt='Gears'/> Settings</CodeEditorPanelBtn>

                    {/* reset code */}
                    <CodeEditorPanelBtn onClick={handleResetCode}> 
                    <img src={resetIcon} alt='Erase'/> Reset</CodeEditorPanelBtn>

                    {/* run code */}
                    <CodeEditorPanelBtn onClick={checkTask}>
                    <img src={runIcon} alt='Play'/>  Run </CodeEditorPanelBtn>

                    {/*Notification that user code contains errors*/}
                </CodeEditorPanel>
                {errorFlag &&
                    <CodeEditorError><i className="fas fa-exclamation-circle" />Check your code</CodeEditorError>}

            </MobileTaskEditorWrapper>

            {/*iframe with user code*/}
            <MobileTaskResult>
                <TaskResultWindow srcDoc={srcDoc} />
            </MobileTaskResult>
        </MobileTaskContentWrapper>}

    </>
}
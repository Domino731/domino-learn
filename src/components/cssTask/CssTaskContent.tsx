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
import React, { FunctionComponent, useEffect, useState } from "react";
import {
    CssResult,
    CssCodeEditorWrapper,
    CssIntroduction,
    CssTarget, CssTaskSuccessful, CssDecorationIntroduction, MobileCssEditorWrapper
} from "../../style/elements/tasks/cssTask";
import {
    TaskContentWrapper,
    CodeEditorPanelBtn,
    CodeEditorPanel,
    ChangeEditor,
    TaskCodeEditorMultiple,
    ChangeEditorCheckbox, CodeEditorError,
    TaskSuccessfulImg, TaskSuccessfulTitle, TaskSuccessfulBar,
    MobileTaskContentWrapper,
    MobileTaskDetailsWrapper,
    MobileTaskDetail,
    MobileTaskResult,
} from "../../style/elements/tasks/task";
import { CSSData } from "../../properties/cssData";
import { IFCssTask, IFPropsCssTaskContent } from "../../types/types";
import {
    getEditorFSize,
    getEditorTheme, removeSolvedTaskFormLS,
    saveCssTaskSolutionToLS, saveSolvedTaskToLS,
} from "../../functions/localStorage";
import { taskValidationHtml } from "../../functions/taskValidationHtml";
import { taskValidationCss } from "../../functions/taskValidationCss";
import { Link } from "react-router-dom";
import { TaskResultWindow } from "../task/TaskResultWindow";
import { TaskAceEditorSettings } from "../task/TaskAceEditorSettings";
import { TaskIntroduction } from "../task/TaskIntroduction";
import { TaskTargets } from "../task/TaskTargets";
import { formatCode } from "../../functions/formatCode";
import {
    HtmlDecorationIntroduction,
    HtmlTaskIntroduction,
    HtmlTaskTarget
} from "../../style/elements/tasks/htmlTask";
import { HTMLData } from "../../properties/htmlData";
import settingsIcon from "../../images/settings_icon.svg";
import resetIcon from "../../images/reset_icon.svg";
import runIcon from "../../images/play_icon.svg";
/**
 * Component with the main content for css task -> targets, introduction, editor.
 * @param taskData - data about css task -> targets, introduction, code, solution...
 * @param allTaskLength - number of all task of particular type
 */
export const CSSTaskContent: FunctionComponent<IFPropsCssTaskContent> = ({ taskData, allTaskLength }): JSX.Element => {

    const [task, setTask] = useState<IFCssTask>(taskData)
    // state with css code
    const [userCode, setUserCode] = useState<{ html: string, css: string }>(task.code);

    // state with annotations from editor, which are used to check user's code for errors
    const [annotations, setAnnotations] = useState<{ css: any[], html: any[] }>({ css: [], html: [] });

    // state with flag to toggle container with editor settings
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false);

    // state which indicates which editor is active -> css editor or html
    const [currentEditor, setCurrentEditor] = useState<"css" | "html">("css");

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
          <style>
          </style></head>
          <body></body>
          </html>`);

    // set the windowWidth state
    const resizeWindow = (): void => setWindowWidth(window.innerWidth);
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    // when the user solves the task correctly, scroll up to know that he did it correctly.
    // This is mainly for mobile devices
    useEffect(() => {
        windowWidth <= 768 && successfulFlag && window.scrollTo(0, 0);
    }, [successfulFlag]);

    // save editor settings into local storage, when the user changes it
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorSettings.fontSize.toString());
        localStorage.setItem("editorTheme", editorSettings.theme);
    }, [editorSettings]);

    // remove error when user type correct code
    useEffect(() => {
        return setErrorFlag(false);
    }, [annotations]);

    /**
     * change userCode.html state
     * @param newValue - new html code
     * @returns 
     */
    const changeUserCodeHtml = (newValue: string): void => {
        return setUserCode(prev => ({
            ...prev,
            html: newValue
        }));
    };

    /**
    * change userCode.css state
    * @param newValue - new css code
    * @returns 
    */
    const changeUserCodeCss = (newValue: string): void => {
        return setUserCode(prev => ({
            ...prev,
            css: newValue
        }));
    };

    /** add editor annotations into Annotations state - only with error status */
    const changeAnnotations = (newValue: any, key: "css" | "html") => {
        return setAnnotations((prev) => ({
            ...prev,
            // add only errors
            [key]: newValue.filter((el: any) => el.type === "error")
        }));
    };

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

    /** change currentEditor state toggle editor between css and html */
    const handleSwitchEditor = (): void => setCurrentEditor(() => currentEditor === "css" ? "html" : "css");

    /** change editorFormFlag state -> toggle container with settings for editor */
    const handleToggleEditorSettings = (): void => setEditorFormFlag(!editorFormFlag);

    /** reset code to original */
    const handleResetCode = (): void => {
        if (currentEditor === "css") {
            return setUserCode(prev => ({
                ...prev,
                css: task.originalCode.css
            }));
        } else {
            return setUserCode(prev => ({
                ...prev,
                html: task.originalCode.html
            }));
        }
    };

    // function responsible for task validation, It checks if all targets of the task have been extecuted by user,
    // if yes, then shows a screen about the correct execution of the task. It works only when user code
    // doesnt have errors
    const checkTask = () => {

        // start the task checking only if the user code does not contain errors
        if (annotations.html.length === 0 && annotations.css.length === 0) {

            // set the result code, which will be displayed in iframe
            setSrcDoc(`<!DOCTYPE html>
                            <html lang="en">
                            <head>
                            <title>${task.title}</title>
                            <style>
                            ${userCode.css}
                            </style></head>
                            <body>${userCode.html}</body>
                            </html>`);

            // format code
            setUserCode({
                html: formatCode("html", userCode.html),
                css: formatCode("css", userCode.css)
            });

            // points needed to complete the task
            const pointsNeeded: number = task.targets.length;

            // user points
            let userPoints = 0;

            // function that add point when user complete task target correctly
            const changeUserPoints = (): number => userPoints++;

            // checking if each task target solution is equal to the user's solution,
            // if yes, changes state and sets checkbox color to green, otherwise set red checkbox
            task.targets.forEach(el => {
                // check task type, because targets may have 2 diffrent types - css or html
                // html type need to change styles in .html file
                if (el.type === "css") {
                    return taskValidationCss(userCode.css, el, changeUserPoints);
                } else if (el.type === "html") {
                    // @ts-ignore
                    return taskValidationHtml(userCode.html, el, changeUserPoints);
                }
            });

            // check if user has executed all targets, if he did then display animation
            if (userPoints === pointsNeeded) {
                // set the animation
                setSuccessfulFlag(true);

                // save solved task title to ls, so that the user knows which tasks he has completed (green background in tasks list)
                saveSolvedTaskToLS(task.title, "solvedCssTasks");
            } else {
                setSuccessfulFlag(false);

                // remove this task from solved in local storage
                removeSolvedTaskFormLS(task.title, "solvedCssTasks")
            }

            // save solution into local storage, so when user comes back he will have their code from last session
            return saveCssTaskSolutionToLS(task.targets, task.title, userCode);
        } else {
            return setErrorFlag(true);
        }
    };


    return <>
        {/* for devies above 768px */}
        {windowWidth > 768 && <TaskContentWrapper>

            {/*iframe with user code*/}
            <CssResult>
                <TaskResultWindow srcDoc={srcDoc} />
            </CssResult>

            {/*editor*/}
            <CssCodeEditorWrapper>

                {/*toggle editor*/}
                <ChangeEditor>
                    {/* css editor */}
                    <ChangeEditorCheckbox lineColor="#0070ba">
                        <label>style.css</label>
                        <input type="checkbox" checked={currentEditor === "css"} onChange={handleSwitchEditor} />
                        <i className="fab fa-css3-alt" />
                        <span />
                    </ChangeEditorCheckbox>

                    {/*certain tasks do not require changes in .html file, so check if task has this turn*/}
                    {task.includeHtml && <ChangeEditorCheckbox lineColor="#e44d26">
                        <label>index.html </label>
                        <input type="checkbox" checked={currentEditor === "html"} onChange={handleSwitchEditor} />
                        <i className="fab fa-html5" />
                        <span />
                    </ChangeEditorCheckbox>}
                </ChangeEditor>

                {/*selected editor - css or html */}
                <TaskCodeEditorMultiple>
                    {currentEditor === "css" &&
                        <AceEditor
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            enableSnippets={true}
                            onChange={changeUserCodeCss}
                            onValidate={vl => changeAnnotations(vl, "css")}
                            mode="css"
                            theme={editorSettings.theme}
                            width="100%"
                            height="100%"
                            value={userCode.css}
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
                        />}

                    {currentEditor === "html" &&
                        <AceEditor
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            enableSnippets={true}
                            onChange={changeUserCodeHtml}
                            onValidate={vl => changeAnnotations(vl, "html")}
                            mode="html"
                            theme={editorSettings.theme}
                            width="100%"
                            height="100%"
                            value={userCode.html}
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
                        />}
                </TaskCodeEditorMultiple>

                {/*editor panel where the user can change settings, check his solution or reset the code*/}
                <CodeEditorPanel>

                    {/*change the settings form*/}
                    {editorFormFlag &&
                        <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                            handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                            toggleForm={handleToggleEditorSettings} />}

                    {/*action buttons*/}
                    {/* toggle container with settings */}
                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}>
                        <img src={settingsIcon} alt='Gears' />
                        Settings</CodeEditorPanelBtn>

                    {/* reset code     */}
                    <CodeEditorPanelBtn onClick={handleResetCode}>
                        <img src={resetIcon} alt='Erase' />
                        Reset
                    </CodeEditorPanelBtn>

                    {/* execute user's code */}
                    <CodeEditorPanelBtn onClick={checkTask}>
                        <img src={runIcon} alt='Run icon'/>
                        Run </CodeEditorPanelBtn>

                </CodeEditorPanel>

                {/*Notification that user code contains errors*/}
                {errorFlag &&
                    <CodeEditorError><i className="fas fa-exclamation-circle" />Check your code</CodeEditorError>}

            </CssCodeEditorWrapper>


            {/*task introduction and targets*/}
            {/*when the user successfully completes the task, these elements are hidden and an animation is displayed*/}
            {successfulFlag === false && <>
                {/* introduction */}
                <CssIntroduction>
                    <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                        imgAlt={CSSData.getFigureAlt()} imgSrc={CSSData.getFigureSrc()} />
                    {/*decorations*/}
                    <CssDecorationIntroduction />
                </CssIntroduction>

                {/* targets */}
                <CssTarget>
                    <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid} />
                </CssTarget>
            </>}

            {/*animation which notifies the user that the task has been successfully completed*/}
            {successfulFlag && <CssTaskSuccessful>
                <TaskSuccessfulImg src={CSSData.getFigureSrc()} alt={CSSData.getFigureAlt()} />
                <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>

                {/*user has a choice to stay with the task or move to another task if there is one*/}
                <TaskSuccessfulBar color="#f15bb5">
                    <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                    {task.number < allTaskLength && <Link to={`/css-task/${task.number + 1}`}>Next task</Link>}
                </TaskSuccessfulBar>

            </CssTaskSuccessful>}

        </TaskContentWrapper>}

        {/*content for mobile devices*/}
        {windowWidth <= 768 && <MobileTaskContentWrapper>

            {/*task introduction and targets*/}
            <MobileTaskDetailsWrapper>

                {/* task  introduction  */}
                <MobileTaskDetail>
                    {successfulFlag === false && <>
                        {/*introduction*/}
                        <HtmlTaskIntroduction>
                            <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                imgAlt={HTMLData.getFigureAlt()} imgSrc={HTMLData.getFigureSrc()} />
                            {/*decorations*/}
                            <HtmlDecorationIntroduction />
                        </HtmlTaskIntroduction>
                    </>}

                    {/*animation which notifies the user that the task has been successfully completed*/}
                    {successfulFlag && <CssTaskSuccessful>
                        <TaskSuccessfulImg src={CSSData.getFigureSrc()} alt={CSSData.getFigureAlt()} />
                        <TaskSuccessfulTitle>Congratulations, you have completed the task
                            correctly</TaskSuccessfulTitle>

                        {/*user has a choice to stay with the task or move to another task if there is one*/}
                        <TaskSuccessfulBar color="#f15bb5">
                            <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                            {task.number < allTaskLength && <Link to={`/css-task/${task.number + 1}`}>Next task</Link>}
                        </TaskSuccessfulBar>
                    </CssTaskSuccessful>}


                </MobileTaskDetail>

                {/*task targets */}
                <MobileTaskDetail>
                    <HtmlTaskTarget>
                        <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid} />
                    </HtmlTaskTarget>
                </MobileTaskDetail>

            </MobileTaskDetailsWrapper>

            <MobileCssEditorWrapper>

                {/*toggle editor*/}
                <ChangeEditor>
                    <ChangeEditorCheckbox lineColor="#0070ba">
                        <label>style.css</label>
                        <input type="checkbox" checked={currentEditor === "css"} onChange={handleSwitchEditor} />
                        <i className="fab fa-css3-alt" />
                        <span />
                    </ChangeEditorCheckbox>

                    {/*some tasks do not require interference with html code*/}
                    {task.includeHtml && <ChangeEditorCheckbox lineColor="#e44d26">
                        <label>index.html </label>
                        <input type="checkbox" checked={currentEditor === "html"} onChange={handleSwitchEditor} />
                        <i className="fab fa-html5" />
                        <span />
                    </ChangeEditorCheckbox>}

                </ChangeEditor>

                {/*selected editor*/}
                <TaskCodeEditorMultiple>
                    {/* css editor */}
                    {currentEditor === "css" &&
                        <AceEditor
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            enableSnippets={true}
                            onChange={changeUserCodeCss}
                            onValidate={vl => changeAnnotations(vl, "css")}
                            mode="css"
                            theme={editorSettings.theme}
                            width="100%"
                            height="100%"
                            value={userCode.css}
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
                        />}

                    {/* html editor */}
                    {currentEditor === "html" &&
                        <AceEditor
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            enableSnippets={true}
                            onChange={changeUserCodeHtml}
                            onValidate={vl => changeAnnotations(vl, "html")}
                            mode="html"
                            theme={editorSettings.theme}
                            width="100%"
                            height="100%"
                            value={userCode.html}
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
                        />}
                </TaskCodeEditorMultiple>

                {/*editor panel where the user can change settings, check his solution or reset the code*/}
                <CodeEditorPanel>

                    {/*change the settings form*/}
                    {editorFormFlag &&
                        <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                            handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                            toggleForm={handleToggleEditorSettings} />}

                    {/*buttons*/}
                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}>
                        <img src={settingsIcon} alt='Gears'/>
                        Settings</CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={handleResetCode}>
                        <img src={resetIcon} alt='Erase'/>
                        Reset
                    </CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={checkTask}>
                        <img src={runIcon} alt='Play icon'/>
                        Run </CodeEditorPanelBtn>

                </CodeEditorPanel>

                {/*Notification that user code contains errors*/}
                {errorFlag &&
                    <CodeEditorError><i className="fas fa-exclamation-circle" />Check your code</CodeEditorError>}
            </MobileCssEditorWrapper>


            {/*iframe with user code*/}
            <MobileTaskResult>
                <TaskResultWindow srcDoc={srcDoc} />
            </MobileTaskResult>

        </MobileTaskContentWrapper>}
    </>

}

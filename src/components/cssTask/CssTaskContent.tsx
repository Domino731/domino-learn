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
import React, {FunctionComponent, useEffect, useState} from "react";
import {
    CssResult,
    CssCodeEditorWrapper,
    CssIntroduction,
    CssTarget, CssTaskSuccessful, CssDecorationIntroduction, MobileCssEditorWrapper
} from "../../style/elements/tasks/cssTask";
// @ts-ignore
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
    MobileTaskEditorWrapper,
    MobileTaskResult,
} from "../../style/elements/tasks/task";
import {cssClass} from "../../properties/cssClass";
import {IFPropsCssTaskContent} from "../../types/types";
import {
    getEditorFSize,
    getEditorTheme,
    saveCssTaskSolutionToLS, saveSolvedTaskToLS,
} from "../../functions/localStorage";
import {taskValidationHtml} from "../../functions/taskValidationHtml";
import {taskValidationCss} from "../../functions/taskValidationCss";
import {Link} from "react-router-dom";
import {TaskResultWindow} from "../task/TaskResultWindow";
import {TaskAceEditorSettings} from "../task/TaskAceEditorSettings";
import {TaskIntroduction} from "../task/TaskIntroduction";
import {TaskTargets} from "../task/TaskTargets";
import {TaskResultLoading} from "../task/TaskLoading";
import {formatCode} from "../../functions/formatCode";
import {user} from "firebase-functions/lib/providers/auth";
import {
    HtmlDecorationIntroduction,
    HtmlTaskIntroduction,
    HtmlTaskSuccessful,
    HtmlTaskTarget
} from "../../style/elements/tasks/htmlTask";
import {htmlClass} from "../../properties/htmlClass";


export const CssTaskContent: FunctionComponent<IFPropsCssTaskContent> = ({task, allTaskLength}): JSX.Element => {

    // state with css code
    const [userCode, setUserCode] = useState<{ html: string, css: string }>(task.code)

    // state with result code, which is display in iFrame
    const [resultCode, setResultCode] = useState<{ html: string, css: string }>({html: "", css: ""})

    // state with annotations from editor
    const [annotations, setAnnotations] = useState<{ css: any[], html: any[] }>({css: [], html: []})


    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false)

    // state which indicates which editor is active -> css editor or html
    const [currentEditor, setCurrentEditor] = useState<"css" | "html">("css")

    // state with editor settings
    const [editorSettings, setEditorSettings] = useState<{ fontSize: number, theme: string }>({
        fontSize: getEditorFSize(),
        theme: getEditorTheme()
    })

    // state with flag, which is responsible for animation when the user correctly completes the task targets
    const [successfulFlag, setSuccessfulFlag] = useState<boolean>(false)

    // state with flag, which is responsible for displaying error about user code
    const [errorFlag, setErrorFlag] = useState<boolean>(false)

    // state with flag, which is responsible for displaying loading screen during checking the task
    const [loadingResult, setLoadingResult] = useState<boolean>(false)

    const [windowWidth, setWindowWidth] = useState<number>(0)

    const resizeWindow = (): void => setWindowWidth(window.innerWidth);

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    const [srcDoc, setSrcDoc] = useState<string>(`<!DOCTYPE html>
          <html lang="en">
          <head>
          <title>${task.title}</title>
          <style>
          </style></head>
          <body></body>
          </html>`)


    // save editor settings into local storage
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorSettings.fontSize.toString())
        localStorage.setItem("editorTheme", editorSettings.theme)
    }, [editorSettings])

    // remove error when user type correct code
    useEffect(() => {
        setErrorFlag(false)
    }, [annotations])


    const changeUserCodeHtml = (newValue: string): void => {
        setUserCode(prev => ({
            ...prev,
            html: newValue
        }))
    }
    const changeAnnotations = (newValue: any, key: "css" | "html") => {
        setAnnotations((prev) => ({
            ...prev,
            [key]: newValue.filter((el: any) => el.type === "error")
        }))
    }
    const changeUserCodeCss = (newValue: string): void => {
        setUserCode(prev => ({
            ...prev,
            css: newValue
        }))
    }

    // change editor font-size
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        fontSize: parseFloat(e.target.value)
    }))
    // change theme
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        theme: e.target.value
    }))


    // switch between code editors - css and html
    const handleSwitchEditor = (): void => setCurrentEditor(() => currentEditor === "css" ? "html" : "css")

    const handleToggleEditorSettings = () => setEditorFormFlag(!editorFormFlag)

    // reset code to original
    const handleResetCode = (): void => {
        if (currentEditor === "css") {
            setUserCode(prev => ({
                ...prev,
                css: task.originalCode.css
            }))
        } else {
            setUserCode(prev => ({
                ...prev,
                html: task.originalCode.html
            }))
        }
    }

    // task validation
    const checkTask = () => {
        // set the loading screen
        setLoadingResult(true)
        if (annotations.html.length === 0 && annotations.css.length === 0) {

            // set the result (display user styles)
            setSrcDoc(`<!DOCTYPE html>
          <html lang="en">
          <head>
          <title>${task.title}</title>
          <style>
          ${userCode.css}
          </style></head>
          <body>${userCode.html}</body>
          </html>`)

            //format code
            setUserCode({
                html: formatCode("html", userCode.html),
                css: formatCode("css", userCode.css)
            })

            // points needed to pass
            const pointsNeeded: number = task.targets.length

            // user points
            let userPoints = 0

// function that add pun when user complete task correctly
            const changeUserPoints = (): number => userPoints++

            // checking if each task solution is equal to the user's solution, at the end we set the updated state of taskTargets
            // depending on whether the task was solved correctly or not, add point and change checkboxes.
            // some task targets may require changes in html code
            task.targets.forEach(el => {
                if (el.type === "css") {
                    // @ts-ignore
                    return taskValidationCss(userCode.css, el, changeUserPoints)
                } else if (el.type === "html") {
                    // @ts-ignore
                    return taskValidationHtml(userCode.html, el, changeUserPoints)
                }
            })

            // check if user has executed all targets, if he did display animation
            if (userPoints === pointsNeeded) {
                // set the animation
                setSuccessfulFlag(true)
                // save solved task title to ls, so that the user knows which tasks he has completed
                saveSolvedTaskToLS(task.title, "solvedCssTasks")
            } else {
                setSuccessfulFlag(false)
            }

            // save solution into local storage, so when user comes back he will have their solution
            saveCssTaskSolutionToLS(task.targets, task.title, userCode)
        } else {
            setErrorFlag(true)
        }
        // remove the loading screen
        setLoadingResult(false)
    }

    return <>
        {windowWidth > 768 && <TaskContentWrapper>
            <CssResult>
                {loadingResult === false && <TaskResultWindow srcDoc={srcDoc}/>}
                {loadingResult && <TaskResultLoading/>}
            </CssResult>

            <CssCodeEditorWrapper>
                <ChangeEditor>
                    <ChangeEditorCheckbox lineColor="#0070ba">
                        <label>style.css</label>
                        <input type="checkbox" checked={currentEditor === "css"} onChange={handleSwitchEditor}/>
                        <i className="fab fa-css3-alt"/>
                        <span/>
                    </ChangeEditorCheckbox>

                    <ChangeEditorCheckbox lineColor="#e44d26">
                        <label>index.html </label>
                        <input type="checkbox" checked={currentEditor === "html"} onChange={handleSwitchEditor}/>
                        <i className="fab fa-html5"/>
                        <span/>
                    </ChangeEditorCheckbox>
                </ChangeEditor>

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


                <CodeEditorPanel>

                    {editorFormFlag &&
                    <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                                           handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                                           toggleForm={handleToggleEditorSettings}/>}


                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}><i
                        className="fas fa-cogs"/> Settings</CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={handleResetCode}><i className="fas fa-eraser"/> Reset
                    </CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
                </CodeEditorPanel>

                {errorFlag &&
                <CodeEditorError><i className="fas fa-exclamation-circle"/>Check your code</CodeEditorError>}

            </CssCodeEditorWrapper>

            {successfulFlag === false && <>
                <CssIntroduction>
                    <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                      imgAlt={cssClass.getFigureAlt()} imgSrc={cssClass.getFigureSrc()}/>
                    {/*decorations*/}
                    <CssDecorationIntroduction/>
                </CssIntroduction>
                <CssTarget>
                    <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid}/>
                </CssTarget>
            </>}

            {successfulFlag && <CssTaskSuccessful>
                <TaskSuccessfulImg src={cssClass.getFigureSrc()} alt={cssClass.getFigureAlt()}/>
                <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>
                <TaskSuccessfulBar color="#f15bb5">
                    <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                    {task.number < allTaskLength && <Link to={`/css-task/${task.number + 1}`}>Next task</Link>}
                </TaskSuccessfulBar>
            </CssTaskSuccessful>}

        </TaskContentWrapper>}
        {windowWidth <= 768 && <MobileTaskContentWrapper>

            <MobileTaskDetailsWrapper>

                <MobileTaskDetail>
                    {successfulFlag === false && <>
                        {/*introduction*/}
                        <HtmlTaskIntroduction>
                            <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                              imgAlt={htmlClass.getFigureAlt()} imgSrc={htmlClass.getFigureSrc()}/>
                            {/*decorations*/}
                            <HtmlDecorationIntroduction/>
                        </HtmlTaskIntroduction>
                    </>}

                    {/*animation when user solves the task correctly*/}
                    {successfulFlag && <CssTaskSuccessful>
                        <TaskSuccessfulImg src={cssClass.getFigureSrc()} alt={cssClass.getFigureAlt()}/>
                        <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>
                        <TaskSuccessfulBar color="#f15bb5">
                            <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                            {task.number < allTaskLength && <Link to={`/css-task/${task.number + 1}`}>Next task</Link>}
                        </TaskSuccessfulBar>
                    </CssTaskSuccessful>}
                </MobileTaskDetail>

                <MobileTaskDetail>
                    {/*task target and instructions*/}
                    <HtmlTaskTarget>
                        <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid}/>
                    </HtmlTaskTarget>
                </MobileTaskDetail>

            </MobileTaskDetailsWrapper>

            <MobileCssEditorWrapper>



                <ChangeEditor>
                    <ChangeEditorCheckbox lineColor="#0070ba">
                        <label>style.css</label>
                        <input type="checkbox" checked={currentEditor === "css"} onChange={handleSwitchEditor}/>
                        <i className="fab fa-css3-alt"/>
                        <span/>
                    </ChangeEditorCheckbox>

                    <ChangeEditorCheckbox lineColor="#e44d26">
                        <label>index.html </label>
                        <input type="checkbox" checked={currentEditor === "html"} onChange={handleSwitchEditor}/>
                        <i className="fab fa-html5"/>
                        <span/>
                    </ChangeEditorCheckbox>
                </ChangeEditor>

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


                <CodeEditorPanel>

                    {editorFormFlag &&
                    <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                                           handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                                           toggleForm={handleToggleEditorSettings}/>}


                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}><i
                        className="fas fa-cogs"/> Settings</CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={handleResetCode}><i className="fas fa-eraser"/> Reset
                    </CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
                </CodeEditorPanel>

                {errorFlag &&
                <CodeEditorError><i className="fas fa-exclamation-circle"/>Check your code</CodeEditorError>}


            </MobileCssEditorWrapper>


            <MobileTaskResult>
                <TaskResultWindow srcDoc={srcDoc}/>
            </MobileTaskResult>

        </MobileTaskContentWrapper>}
    </>

}

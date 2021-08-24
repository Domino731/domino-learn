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
import {FunctionComponent, useEffect, useState} from "react";
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
import {htmlClass} from "../../properties/htmlClass";
import {
    getEditorFSize,
    getEditorTheme,
    saveHtmlTaskSolutionToLS, saveSolvedTaskToLS
} from "../../functions/localStorage";
import {Link} from "react-router-dom";
import {IFPropsHtmlTaskContent} from "../../types/types";
import {taskValidationHtml} from "../../functions/taskValidationHtml";
import {TaskIntroduction} from "../task/TaskIntroduction";
import {TaskTargets} from "../task/TaskTargets";
import {TaskAceEditorSettings} from "../task/TaskAceEditorSettings";
import {TaskResultWindow} from "../task/TaskResultWindow";

const beautifyHtml = require('js-beautify').html


export const HtmlTaskContent: FunctionComponent<IFPropsHtmlTaskContent> = ({
                                                                               task,
                                                                               allTaskLength
                                                                           }): JSX.Element | null => {

    // state with userCode from editor output
    const [userCode, setUserCode] = useState<string>(task.code)

    // state with result code, which is display in iFrame
    const [resultCode, setResultCode] = useState<string>("")

    // state with annotations from editor
    const [annotations, setAnnotations] = useState<any[]>([])

    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false)


    const [editorSettings, setEditorSettings] = useState<{ fontSize: number, theme: string }>({
        fontSize: getEditorFSize(),
        theme: getEditorTheme()
    })

    // state with flag, which is responsible for animation when the user correctly completes the task targets
    const [successfulFlag, setSuccessfulFlag] = useState<boolean>(false)

    // state with flag, which is responsible for displaying error about user code
    const [errorFlag, setErrorFlag] = useState<boolean>(false)

    const [windowWidth, setWindowWidth] = useState<number>(0)

    const [srcDoc, setSrcDoc] = useState<string>(`<!DOCTYPE html>
          <html lang="en">
          <head>
          <title>${task.title}</title>
        </head>
          <body></body>
          </html>`)

    // save editor settings into local storage
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorSettings.fontSize.toString())
        localStorage.setItem("editorTheme", editorSettings.theme)
    }, [editorSettings])

    const resizeWindow = (): void => setWindowWidth(window.innerWidth);

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    // remove error when user type new code
    useEffect(() => {
        setErrorFlag(false)
    }, [annotations])

    useEffect(()=>{
        successfulFlag && window.scrollTo(0,0)
    },[successfulFlag])
    // task validation
    const checkTask = (): void => {
        if (annotations.length === 0) {
            // set the result (display user html code)
            setSrcDoc(`
          <!DOCTYPE html>
          <html lang="en">
          <head><title>${task.title}</title></head>
          <body>${userCode}</body>
          </html>`)

            // points needed to pass
            const pointsNeeded: number = task.targets.length

            // user points
            let userPoints = 0

// function that add pun when user complete task correctly
            const changeUserPoints = (): number => userPoints++

            // // checking each solution to a task is equal to the user's solution, at the end set updated taskTargets state
            // // depending by task is solved correctly or not (checkboxes in task targets list will change their colors)
            task.targets.forEach(el => taskValidationHtml(userCode, el, changeUserPoints))

            // save solution into local storage, so when user comes back he will have their solution
            saveHtmlTaskSolutionToLS(task.targets, task.title, userCode)

            // check if user has executed all targets, if he did display animation
            if (userPoints === pointsNeeded) {
                // set the animation
                setSuccessfulFlag(true)
                // save solved task title to ls, so that the user knows which tasks he has completed
                saveSolvedTaskToLS(task.title, "solvedHtmlTasks")
            } else {
                setSuccessfulFlag(false)
            }
        } else {
            setErrorFlag(true)
        }

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

    // change code from
    const changeUserCode = (newValue: string): void => {
        setUserCode(newValue)
    }

    // reset code in editor by original code from task
    const handleResetCode = (): void => setUserCode(task.originalCode)

    const handleToggleEditorSettings = () => setEditorFormFlag(!editorFormFlag)

    return <>
        {windowWidth > 768 && <TaskContentWrapper>
            {successfulFlag === false && <>
                {/*introduction*/}
                <HtmlTaskIntroduction>
                    <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                      imgAlt={htmlClass.getFigureAlt()} imgSrc={htmlClass.getFigureSrc()}/>
                    {/*decorations*/}
                    <HtmlDecorationIntroduction/>
                </HtmlTaskIntroduction>
                {/*task target and instructions*/}
                <HtmlTaskTarget>
                    <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid}/>
                </HtmlTaskTarget>
            </>}

            {/*animation when user solves the task correctly*/}
            {successfulFlag && <HtmlTaskSuccessful>
                <TaskSuccessfulImg src={htmlClass.getFigureSrc()} alt={htmlClass.getFigureAlt()}/>
                <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>
                <TaskSuccessfulBar color="#ffca3a">
                    <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                    {task.number < allTaskLength && <Link to={`/html-task/${task.number + 1}`}>Next task</Link>}
                </TaskSuccessfulBar>
            </HtmlTaskSuccessful>}


            {/*code editor - ace*/}
            <HtmlTaskCodeEditor>
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
                <CodeEditorPanel>
                    {editorFormFlag &&
                    <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                                           handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                                           toggleForm={handleToggleEditorSettings}/>}
                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}><i
                        className="fas fa-cogs"/> Settings</CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={handleResetCode}><i className="fas fa-eraser"/> Reset </CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
                </CodeEditorPanel>
                {errorFlag && <CodeEditorError><i className="fas fa-exclamation-circle"/>Check your code</CodeEditorError>}
            </HtmlTaskCodeEditor>

            {/*user code*/}
            <HtmlTaskResult>
                <TaskResultWindow srcDoc={srcDoc}/>
            </HtmlTaskResult>
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
                    {successfulFlag && <HtmlTaskSuccessful>
                        <TaskSuccessfulImg src={htmlClass.getFigureSrc()} alt={htmlClass.getFigureAlt()}/>
                        <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>
                        <TaskSuccessfulBar color="#ffca3a">
                            <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                            {task.number < allTaskLength && <Link to={`/html-task/${task.number + 1}`}>Next task</Link>}
                        </TaskSuccessfulBar>
                    </HtmlTaskSuccessful>}
                </MobileTaskDetail>

                <MobileTaskDetail>
                    {/*task target and instructions*/}
                    <HtmlTaskTarget>
                        <TaskTargets targets={task.targets} title={task.title} aidArr={task.aid}/>
                    </HtmlTaskTarget>
                </MobileTaskDetail>
            </MobileTaskDetailsWrapper>



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
                <CodeEditorPanel>
                    {editorFormFlag &&
                    <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorSettings.theme}
                                           handleChangeFs={handleChangeFs} editorFs={editorSettings.fontSize}
                                           toggleForm={handleToggleEditorSettings}/>}
                    <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}><i
                        className="fas fa-cogs"/> Settings</CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={handleResetCode}><i className="fas fa-eraser"/> Reset </CodeEditorPanelBtn>
                    <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
                </CodeEditorPanel>
                {errorFlag && <CodeEditorError><i className="fas fa-exclamation-circle"/>Check your code</CodeEditorError>}
            </MobileTaskEditorWrapper>

            <MobileTaskResult>
                <TaskResultWindow srcDoc={srcDoc}/>
            </MobileTaskResult>
        </MobileTaskContentWrapper>}

    </>
}
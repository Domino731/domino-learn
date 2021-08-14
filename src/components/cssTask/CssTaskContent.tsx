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
    CssTaskContentWrapper,
    CssResult,
    CssCodeEditorWrapper,
    CssIntroduction,
    CssTarget,
    CssDecorationIntroduction, CssTaskSuccessful
} from "../../style/elements/tasks/cssTask";
import {
    TaskIntroductionBar,
    TaskSectionHeader,
    TaskIntroductionText,
    TaskAidsWrapper,
    TaskAidsTitle,
    TaskAidsList,
    EditorSettingsWrapper,
    EditorSettingsCloseIcon,
    EditorSettingsLabel,
    EditorSettingsFSize,
    EditorSettingsThemesWrapper,
    CodeEditorPanelBtn,
    CodeEditorPanel,
    ChangeEditor,
    TaskCodeEditorMultiple,
    WebBrowserWindow,
    WebBrowserTopBar,
    WebBrowserGreenBox,
    WebBrowserYellowBox,
    WebBrowserRedBox,
    ChangeEditorCheckbox,
    TaskTargetsWrapper,
    TaskTarget,
    TaskTargetCheckbox,
    TaskTargetNumber,
    TaskTargetText, TaskSuccessfulImg, TaskSuccessfulTitle, TaskSuccessfulBar
} from "../../style/elements/tasks/task";
import {cssClass} from "../../properties/cssClass";
import {IFCssTaskTargetCss, IfCssTaskTargetHtml, IFPropsCssTaskContent, IFTaskTargets} from "../../types/types";
import {TaskAid} from "../task/TaskAid";
import {getEditorFSize, getEditorTheme} from "../../functions/localStorage";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-html'
import {taskValidationHtml} from "../../functions/taskValidationHtml";
import {taskValidationCss} from "../../functions/taskValidationCss";
import {Link} from "react-router-dom";
export const CssTaskContent: FunctionComponent<IFPropsCssTaskContent> = ({task, allTaskLength}): JSX.Element => {

    // state with css code
    //const [userCode, setUserCode] = useState<{ html: string, css: string }>({html: task.code.html, css: task.code.css})
    const [userCode, setUserCode] = useState<{ html: string, css: string }>({html: "", css: ""})

    // state with result code, which is display in iFrame
    const [resultCode, setResultCode] = useState<{ html: string, css: string }>({html: "", css: ""})

    const [taskTargets, setTaskTargets] = useState<(IFCssTaskTargetCss | IfCssTaskTargetHtml) []>(task.targets)

    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false)

    // state which indicates which editor is active -> css editor or html
    const [currentEditor, setCurrentEditor] = useState<"css" | "html">("css")

    // state with editor theme from localStorage
    const [editorTheme, setEditorTheme] = useState<string>(getEditorTheme)

    // state with editor font size from localStorage
    const [editorFs, setEditorFs] = useState<number>(getEditorFSize)

    // state with flag, which is responsible for animation when the user correctly completes the task targets
    const [successfulFlag, setSuccessfulFlag] = useState<boolean>(false)

    const changeUserCodeHtml = (newValue: string): void => {
        setUserCode(prev => ({
            ...prev,
            html: newValue
        }))
    }

    const changeUserCodeCss = (newValue: string): void => {
        setUserCode(prev => ({
            ...prev,
            css: newValue
        }))
    }
    // change editor font-size
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorFs(parseFloat(e.target.value))

    // change theme
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorTheme(e.target.value)

    // switch between code editors - css and html
    const handleSwitchEditor = (): void => setCurrentEditor(() => currentEditor === "css" ? "html" : "css")

    // reset code to original
    const handleResetCode = (): void => {
        if (currentEditor === "css") {
            setUserCode(prev => ({
                ...prev,
                css: task.code.css
            }))
        } else {
            setUserCode(prev => ({
                ...prev,
                html: task.code.html
            }))
        }
    }

    // task validation
    const checkTask = () => {

        setResultCode({
            html: userCode.html,
            css: userCode.css
        })

        // points needed to pass
        const pointsNeeded: number = task.targets.length

        // user points
        let userPoints = 0

        const changeUserPoints = (): number => userPoints++

        // checking if each task solution is equal to the user's solution, at the end we set the updated state of taskTargets
        // depending on whether the task was solved correctly or not, add point and change checkboxes.
        // some task targets may require changes in html code
        taskTargets.map(el => {
            if (el.type === "css") {
                // @ts-ignore
                return taskValidationCss(userCode.css, el, changeUserPoints)
            } else if (el.type === "html") {
                // @ts-ignore
                return taskValidationHtml(userCode.html, el, changeUserPoints)
            }
        })

        if(userPoints === pointsNeeded){
            setSuccessfulFlag(true)
        }

    }
    // code
    const srcDoc = `
        <!DOCTYPE html>
          <html lang="en">
          <head>
          <title>${task.title}</title>
          <style>
          ${resultCode.css}
          </style></head>
          <body>${resultCode.html}</body>
          </html>`


    return <CssTaskContentWrapper>
        <CssResult>
            <WebBrowserWindow>
                <WebBrowserTopBar>
                    <WebBrowserGreenBox/>
                    <WebBrowserYellowBox/>
                    <WebBrowserRedBox/>
                </WebBrowserTopBar>
                <iframe srcDoc={srcDoc}
                        width="100%" height="100%" frameBorder="0" sandbox="allow-scripts" title="output"
                />
            </WebBrowserWindow>
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
                {currentEditor === "css" && <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={changeUserCodeCss}
                    mode="css"
                    theme={editorTheme}
                    width="100%"
                    height="100%"
                    value={userCode.css}
                    fontSize={editorFs}
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
                {currentEditor === "html" && <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={changeUserCodeHtml}
                    mode="html"
                    theme={editorTheme}
                    width="100%"
                    height="100%"
                    value={userCode.html}
                    fontSize={editorFs}
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
                {editorFormFlag && <EditorSettingsWrapper>
                    <EditorSettingsCloseIcon onClick={() => setEditorFormFlag(!editorFormFlag)}><i
                        className="far fa-window-close"/></EditorSettingsCloseIcon>
                    <EditorSettingsLabel>
                        Change font size
                        <EditorSettingsFSize type="number" min="1" max="60" step="1" value={editorFs}
                                             onChange={handleChangeFs}/>
                    </EditorSettingsLabel>

                    <EditorSettingsLabel>
                        Change theme
                    </EditorSettingsLabel>

                    <EditorSettingsThemesWrapper>
                        <label>
                            Monokai
                            <input type="checkbox" value="monokai" checked={editorTheme === "monokai"}
                                   onChange={handleChangeTheme}/>
                            <span><i className="fas fa-check-square"/></span>
                        </label>
                        <label>
                            Ambiance
                            <input type="checkbox" value="ambiance" checked={editorTheme === "ambiance"}
                                   onChange={handleChangeTheme}/>
                            <span><i className="fas fa-check-square"/></span>
                        </label>
                        <label>
                            Clouds
                            <input type="checkbox" value="clouds" checked={editorTheme === "clouds"}
                                   onChange={handleChangeTheme}/>
                            <span><i className="fas fa-check-square"/></span>
                        </label>
                        <label>
                            Dracula
                            <input type="checkbox" value="dracula" checked={editorTheme === "dracula"}
                                   onChange={handleChangeTheme}/>
                            <span><i className="fas fa-check-square"/></span>
                        </label>
                        <label>
                            Solarized light
                            <input type="checkbox" value="solarized_light" checked={editorTheme === "solarized_light"}
                                   onChange={handleChangeTheme}/>
                            <span><i className="fas fa-check-square"/></span>
                        </label>
                        <label>
                            Crimson editor
                            <input type="checkbox" value="crimson_editor" checked={editorTheme === "crimson_editor"}
                                   onChange={handleChangeTheme}/>
                            <span><i className="fas fa-check-square"/></span>
                        </label>
                        <label>
                            Github
                            <input type="checkbox" value="github" checked={editorTheme === "github"}
                                   onChange={handleChangeTheme}/>
                            <span><i className="fas fa-check-square"/></span>
                        </label>
                        <label>
                            Terminal
                            <input type="checkbox" value="terminal" checked={editorTheme === "terminal"}
                                   onChange={handleChangeTheme}/>
                            <span><i className="fas fa-check-square"/></span>
                        </label>
                    </EditorSettingsThemesWrapper>
                </EditorSettingsWrapper>}

                <CodeEditorPanelBtn onClick={() => setEditorFormFlag(!editorFormFlag)}><i
                    className="fas fa-cogs"/> Settings</CodeEditorPanelBtn>
                <CodeEditorPanelBtn onClick={handleResetCode}><i className="fas fa-eraser"/> Reset </CodeEditorPanelBtn>
                <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
            </CodeEditorPanel>
        </CssCodeEditorWrapper>


        {successfulFlag === false && <>
            <CssIntroduction>
                <TaskSectionHeader><i className="fas fa-book-open"/> <span>Introduction</span></TaskSectionHeader>
                <TaskIntroductionBar>
                    <img src={cssClass.getFigureSrc()} alt={cssClass.getFigureAlt()}/>
                    <h3>{task.title}</h3>
                </TaskIntroductionBar>

                {/*@ts-ignore*/}
                <TaskIntroductionText dangerouslySetInnerHTML={{__html: task.introduction}}/>

                {/*decorations*/}
                <CssDecorationIntroduction/>
            </CssIntroduction>

            <CssTarget>
                {/*task targets list*/}
                <TaskSectionHeader><i className="fas fa-bullseye"/> <span>Your task</span></TaskSectionHeader>
                <TaskTargetsWrapper>
                    {taskTargets.map((el, num) => <TaskTarget key={`${task.title}_taskTarget_${num}`}>

                        {el.solved === null && <TaskTargetCheckbox backgroundColor={"#e5e3f1"}/>}
                        {el.solved === false && <TaskTargetCheckbox backgroundColor={"#f9320c"}><i
                            className="fas fa-times"/></TaskTargetCheckbox>}
                        {el.solved === true &&
                        <TaskTargetCheckbox backgroundColor={"#75D701"}><i
                            className="fas fa-check"/></TaskTargetCheckbox>}
                        <TaskTargetNumber>{el.number}. </TaskTargetNumber>
                        <TaskTargetText dangerouslySetInnerHTML={{__html: el.target}}/>
                    </TaskTarget>)}
                </TaskTargetsWrapper>

                <TaskAidsWrapper>
                    <TaskAidsTitle>Task aids</TaskAidsTitle>
                    <TaskAidsList>
                        {task.aid.map((el, num) => <TaskAid aid={el} key={`${task.title}_taskAid_${num}`}/>)}
                    </TaskAidsList>
                </TaskAidsWrapper>
                <img src="" alt=""/>
            </CssTarget>
        </>}

        {successfulFlag && <CssTaskSuccessful>
            <TaskSuccessfulImg src={cssClass.getFigureSrc()} alt={cssClass.getFigureAlt()}/>
            <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>
            <TaskSuccessfulBar color="#f15bb5">
                <button onClick={() => setSuccessfulFlag(false)}>Close</button>
                {task.number < allTaskLength  && <Link to={`/css-task/${task.number + 1}`}>Next task</Link>}
            </TaskSuccessfulBar>
        </CssTaskSuccessful>}

    </CssTaskContentWrapper>
}
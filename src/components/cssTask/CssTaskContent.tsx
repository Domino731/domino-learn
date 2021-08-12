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
import {FunctionComponent, useState} from "react";
import {
    CssTaskContentWrapper,
    CssResult,
    CssCodeEditorWrapper,
    CssIntroduction,
    CssTarget,
    CssDecorationIntroduction
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
    WebBrowserRedBox, ChangeEditorCheckbox
} from "../../style/elements/tasks/task";
import {cssClass} from "../../properties/cssClass";
import {IFPropsCssTaskContent} from "../../types/types";
import {TaskAid} from "../task/TaskAid";
import {getEditorFSize, getEditorTheme} from "../../functions/localStorage";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-html'

const beautify = require('js-beautify').html
export const CssTaskContent: FunctionComponent<IFPropsCssTaskContent> = ({task}): JSX.Element => {

    // state with css code
    const [userCodeCss, setUserCodeCss] = useState<string>("")

    // state with html code
    const [userCodeHtml, setUserCodeHtml] = useState<string>("")

    // state with final code
    const [resultCode, setResultCode] = useState<{html:string, css: string}>({html:"", css: ""})
    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false)

    // state which indicates which editor is active -> css editor or html
    const [currentEditor, setCurrentEditor] = useState<"css" | "html">("css")

    // state with editor theme from localStorage
    const [editorTheme, setEditorTheme] = useState<string>(getEditorTheme)

    // state with editor font size from localStorage
    const [editorFs, setEditorFs] = useState<number>(getEditorFSize)

    // change editor font-size
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorFs(parseFloat(e.target.value))

    // change theme
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorTheme(e.target.value)

    // switch between code editors - css and html
    const handleSwitchEditor = (): void => setCurrentEditor(() => currentEditor === "css" ? "html" : "css")

    // change user css code
    const changeUserCodeCSS = (newValue: string): void => {
        setUserCodeCss(beautify(newValue, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}))
        console.log(userCodeCss);
    }

    // change user css code
    const changeUserCodeHTML = (newValue: string): void => {
     setUserCodeHtml(beautify(newValue, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}))
        console.log(userCodeHtml);
    }

    // task validation
    const checkTask = () => {
        setUserCodeCss(beautify(userCodeCss, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}))
        setUserCodeHtml(beautify(userCodeHtml, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}))
        setResultCode({css: userCodeCss, html: userCodeHtml})
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
                    onChange={changeUserCodeCSS}
                    mode="css"
                    theme={editorTheme}
                    width="100%"
                    height="100%"
                    value={userCodeCss}
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
                    onChange={changeUserCodeHTML}
                    mode="html"
                    theme={editorTheme}
                    width="100%"
                    height="100%"
                    value={userCodeHtml}
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
                <CodeEditorPanelBtn><i className="fas fa-eraser"/> Reset </CodeEditorPanelBtn>
                <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
            </CodeEditorPanel>
        </CssCodeEditorWrapper>

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

        < CssTarget>
            <TaskSectionHeader><i className="fas fa-bullseye"/> <span>Your task</span></TaskSectionHeader>
            <TaskAidsWrapper>
                <TaskAidsTitle>Task aids</TaskAidsTitle>
                <TaskAidsList>
                    {task.aid.map((el, num) => <TaskAid aid={el} key={`${task.title}_taskAid_${num}`}/>)}

                </TaskAidsList>
            </TaskAidsWrapper>
        </CssTarget>

    </CssTaskContentWrapper>
}
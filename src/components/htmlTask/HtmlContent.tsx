import {FunctionComponent, useEffect, useState} from "react";
import {HtmlTaskContentWrapper} from "../../style/elements/htmlTask/htmlTask";
import {
    HtmlTaskIntroduction,
    HtmlTaskTarget,
    HtmlTaskCodeEditor,
    HtmlTaskResult,
    HtmlDecorationIntroduction
} from "../../style/elements/htmlTask/htmlTask";
import {
    TaskIntroductionBar,
    TaskSectionHeader,
    TaskIntroductionText,
    TaskTargetsWrapper,
    TaskTarget,
    TaskTargetText,
    TaskTargetCheckbox,
    CodeEditorPanel,
    CodeEditorPanelBtn,
    WebBrowserTopBar,
    WebBrowserWindow,
    WebBrowserGreenBox,
    WebBrowserRedBox,
    WebBrowserYellowBox,
    EditorSettingsWrapper,
    EditorSettingsFSize,
    EditorSettingsLabel,
    EditorSettingsThemesWrapper,
    EditorSettingsCloseIcon,
    TaskAidsTitle,
    TaskAidsWrapper,
    TaskAidsList
} from "../../style/general/generalStyles";
import {htmlClass} from "../../properties/htmlClass";
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
import {getEditorFSize, getEditorTheme} from "../../functions/localStorage";
import {TaskAid} from "../task/TaskAid";
import {TypeTaskAid} from "../../firebase/operations";

type HtmlTaskContentProps = {
    task: {
        title: string,
        introduction: string,
        targets: string[],
        number: number,
        aid: TypeTaskAid[]
    } | undefined,
}

export const HtmlTaskContent: FunctionComponent<HtmlTaskContentProps> = ({task}): JSX.Element | null => {

    // state with user html code
    const [userCode, setUserCode] = useState<string>("<h1>Welcome</h1>")

    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState(false)

    // state with editor font size
    const [editorFs, setEditorFs] = useState<number>(getEditorFSize)

    // state with editor theme
    const [editorTheme, setEditorTheme] = useState<string>(getEditorTheme)


    // save font size into local storage
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorFs.toString())
    }, [editorFs])

    // save theme into local storage
    useEffect(() => {
        localStorage.setItem("editorTheme", editorTheme)
    }, [editorTheme])

    // change flag -> show editor settings form
    const handleChangeEditorFormFlag = (): void => setEditorFormFlag(!editorFormFlag)

    // change editor font-size
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorFs(parseFloat(e.target.value))

    // change theme
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorTheme(e.target.value)


    // change code
    const changeUserCode = (newValue: any) => {
        setUserCode(newValue)
    }

    // code
    const srcDoc = `
        <!DOCTYPE html>
          <html lang="en">
          <head></head>
          <body>${userCode}</body>
          </html>`
    if (task === undefined) {
        return null
    }

    return <HtmlTaskContentWrapper>

        {/*introduction*/}
        <HtmlTaskIntroduction>

            <TaskSectionHeader><i className="fas fa-book-open"/> <span>Introduction</span></TaskSectionHeader>
            <TaskIntroductionBar>
                <img src={htmlClass.getFigureSrc()} alt={htmlClass.getFigureAlt()}/>
                <h3>{task.title}</h3>
            </TaskIntroductionBar>
            <TaskIntroductionText dangerouslySetInnerHTML={{__html: task.introduction}}/>

            {/*decorations*/}
            <HtmlDecorationIntroduction/>
        </HtmlTaskIntroduction>

        {/*task target and instructions*/}
        <HtmlTaskTarget>

            {/*targets*/}
            <TaskSectionHeader><i className="fas fa-bullseye"/> <span>Your task</span></TaskSectionHeader>
            <TaskTargetsWrapper>
                {task.targets.map((el, num) => <TaskTarget key={`${task.title}_taskTarget_${num}`}>
                    <TaskTargetCheckbox/>
                    <TaskTargetText dangerouslySetInnerHTML={{__html: el}}/>
                </TaskTarget>)}
            </TaskTargetsWrapper>

            {/*task aids*/}
            <TaskAidsWrapper>
                <TaskAidsTitle>Task aids</TaskAidsTitle>
                <TaskAidsList>
                    {task.aid.map((el, num) => <TaskAid aid={el} key={`${task.title}_taskAid_${num}`}/>)}

                </TaskAidsList>
            </TaskAidsWrapper>

        </HtmlTaskTarget>

        {/*code editor - ace*/}
        <HtmlTaskCodeEditor>
            <AceEditor

                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                onChange={changeUserCode}
                mode="html"
                theme={editorTheme}
                width="100%"
                height="100%"
                value={userCode}
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
            />
            <CodeEditorPanel>
                {editorFormFlag && <EditorSettingsWrapper>
                    <EditorSettingsCloseIcon onClick={handleChangeEditorFormFlag}><i
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

                <CodeEditorPanelBtn onClick={handleChangeEditorFormFlag}><i
                    className="fas fa-cogs"/> Settings</CodeEditorPanelBtn>
                <CodeEditorPanelBtn><i className="fas fa-eraser"/> Reset </CodeEditorPanelBtn>
                <CodeEditorPanelBtn><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
            </CodeEditorPanel>
        </HtmlTaskCodeEditor>

        {/*user code*/}
        <HtmlTaskResult>
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
        </HtmlTaskResult>

    </HtmlTaskContentWrapper>
}
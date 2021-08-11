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
import {TypeTaskAid, TypeTaskTargets} from "../../firebase/operations";

const beautify = require('js-beautify').html
type HtmlTaskContentProps = {
    task: {
        title: string,
        introduction: string,
        targets: TypeTaskTargets[],
        number: number,
        aid: TypeTaskAid[],
        code: string
    } | undefined,
}

export const HtmlTaskContent: FunctionComponent<HtmlTaskContentProps> = ({task}): JSX.Element | null => {

    // state with userCode from editor output
    const [userCode, setUserCode] = useState<string>("")

    // state with result code, which is display in iFrame
    const [resultCode, setResultCode] = useState<string>("")

    const [taskTargets, setTaskTargets] = useState<TypeTaskTargets[]>(task!.targets)
    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState(false)

    // state with editor font size from localStorage
    const [editorFs, setEditorFs] = useState<number>(getEditorFSize)

    // state with editor theme from localStorage
    const [editorTheme, setEditorTheme] = useState<string>(getEditorTheme)


    // when component mounted format task code
    useEffect(() => {
        setUserCode(beautify(task!.code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}));
    }, [task])

    // save font size into local storage
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorFs.toString())
    }, [editorFs])

    // save theme into local storage
    useEffect(() => {
        localStorage.setItem("editorTheme", editorTheme)
    }, [editorTheme])


    // task validation
    const checkTask = (): void => {

        // string from which the solution will be extracted
        const code = userCode
        taskTargets.map(el => {


            // locations of comments based on which it will be possible to get user solution
            const startPoint: number = code.indexOf(`<!-- Place your code for task ${el.number} below -->`)
            const endPoint: number = code.indexOf(`<!--${el.number}-->`)

            // user solution with lower case (without task comments and spaces)
            const userSolution = code
                .substring(startPoint, endPoint)
                .replace(`<!-- Place your code for task ${el.number} below -->`, "")
                .replace(/\s/g, '')
                .toLowerCase()

            // task solution with lower case (without task comments and spaces)
            const taskSolution = el.solution.replace(/\s/g, '').toLowerCase()

            // change taskTargets state to inform user what he did correctly and what he did wrong -> checkboxes in task targets list will change their color
            // correctly
            if (taskSolution === userSolution) {
                const updatedTaskTargets = taskTargets.map(el => ({...el, solved: true}))
                setTaskTargets(updatedTaskTargets)
            }
            // incorrectly
            else {
                const updatedTaskTargets = taskTargets.map(el => ({...el, solved: false}))
                setTaskTargets(updatedTaskTargets)
            }

        })

        // set the result
        setResultCode(beautify(userCode, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}));
    }

    // change flag -> show editor settings form
    const handleChangeEditorFormFlag = (): void => setEditorFormFlag(!editorFormFlag)

    // change editor font-size
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorFs(parseFloat(e.target.value))

    // change theme
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorTheme(e.target.value)


    // change code from
    const changeUserCode = (newValue: string): void => {
        setUserCode(newValue)
    }

    // reset code in editor by original code from task
    const handleResetCode = (): void => {
        setUserCode(beautify(task!.code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}));
    }

    // code
    const srcDoc = `
        <!DOCTYPE html>
          <html lang="en">
          <head></head>
          <body>${resultCode}</body>
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
                {taskTargets.map((el, num) => <TaskTarget key={`${task.title}_taskTarget_${num}`}>
                    <TaskTargetCheckbox/>
                    <TaskTargetText dangerouslySetInnerHTML={{__html: el.target}}/>
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
                <CodeEditorPanelBtn onClick={handleResetCode}><i className="fas fa-eraser"/> Reset </CodeEditorPanelBtn>
                <CodeEditorPanelBtn onClick={checkTask}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
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
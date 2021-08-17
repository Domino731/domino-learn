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
    TaskAidsList,
    TaskTargetNumber,
    TaskSuccessfulImg,
    TaskSuccessfulBar,
    TaskSuccessfulTitle,
} from "../../style/elements/tasks/task";
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
import {
    getEditorFSize,
    getEditorTheme, getHtmlTaskCodeFromLS,
    getHtmlTaskTargetsFromLS,
    saveHtmlTaskSolutionToLS
} from "../../functions/localStorage";
import {TaskAid} from "../task/TaskAid";
import {Link} from "react-router-dom";
import {IFPropsHtmlTaskContent, IFTaskTargets} from "../../types/types";
import {taskValidationHtml} from "../../functions/taskValidationHtml";

const beautifyHtml = require('js-beautify').html


export const HtmlTaskContent: FunctionComponent<IFPropsHtmlTaskContent> = ({
                                                                               task,
                                                                               allTaskLength
                                                                           }): JSX.Element | null => {

    // state with userCode from editor output
    const [userCode, setUserCode] = useState<string>("")

    // state with result code, which is display in iFrame
    const [resultCode, setResultCode] = useState<string>("")

    const [taskTargets, setTaskTargets] = useState<IFTaskTargets[]>(task.targets)

    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false)

    // state with editor font size from localStorage
    const [editorFs, setEditorFs] = useState<number>(getEditorFSize)

    // state with editor theme from localStorage
    const [editorTheme, setEditorTheme] = useState<string>(getEditorTheme)

    // state with flag, which is responsible for animation when the user correctly completes the task targets
    const [successfulFlag, setSuccessfulFlag] = useState<boolean>(false)


    // check if the user hasn't already solved the task, if he  has solved it,
    // get it from local storage and if not, return the default value (task.targets)
    useEffect(() => {
        getHtmlTaskTargetsFromLS(setTaskTargets, task.title, task.targets)
        getHtmlTaskCodeFromLS(setUserCode, task.title, task.code)
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

        // set the result (display user html code)
        setResultCode(beautifyHtml(userCode, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}));

        // points needed to pass
        const pointsNeeded: number = task.targets.length

        // user points
        let userPoints = 0

// function that add pun when user complete task correctly
        const changeUserPoints = (): number => userPoints++

        // // checking each solution to a task is equal to the user's solution, at the end set updated taskTargets state
        // // depending by task is solved correctly or not (checkboxes in task targets list will change their colors)
        taskTargets.map(el => taskValidationHtml(userCode, el, changeUserPoints))

        // save solution into local storage, so when user comes back he will have their solution
        saveHtmlTaskSolutionToLS(taskTargets, task.title, userCode)

        // check if user has executed all targets, if he did display animation
        if (userPoints === pointsNeeded) {
            setSuccessfulFlag(true)
        }
    }


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
        setUserCode(beautifyHtml(task.code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}));
    }

    // code which is placed in iframe as result (web browser window)
    const srcDoc = `
        <!DOCTYPE html>
          <html lang="en">
          <head></head>
          <body>${resultCode}</body>
          </html>`


    return <TaskContentWrapper>

        {successfulFlag === false && <>
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

                {/*task aids*/}
                <TaskAidsWrapper>
                    <TaskAidsTitle>Task aids</TaskAidsTitle>
                    <TaskAidsList>
                        {task.aid.map((el, num) => <TaskAid aid={el} key={`${task.title}_taskAid_${num}`}/>)}

                    </TaskAidsList>
                </TaskAidsWrapper>

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

    </TaskContentWrapper>
}
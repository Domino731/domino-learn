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
    TaskSuccessfulTitle, CodeEditorError,
} from "../../style/elements/tasks/task";
import {htmlClass} from "../../properties/htmlClass";
import {
    getEditorFSize,
    getEditorTheme, getHtmlTaskCodeFromLS,
    getHtmlTaskTargetsFromLS,
    saveHtmlTaskSolutionToLS, saveSolvedTaskToLS
} from "../../functions/localStorage";
import {TaskAid} from "../task/TaskAid";
import {Link} from "react-router-dom";
import {IFPropsHtmlTaskContent, IFTaskTargets} from "../../types/types";
import {taskValidationHtml} from "../../functions/taskValidationHtml";
import {TaskIntroduction} from "../task/TaskIntroduction";
import {cssClass} from "../../properties/cssClass";
import {TaskTargets} from "../task/TaskTargets";
import {TaskAceEditorSettings} from "../task/TaskAceEditorSettings";
import {TaskResultWindow} from "../task/TaskResultWindow";

const beautifyHtml = require('js-beautify').html


export const HtmlTaskContent: FunctionComponent<IFPropsHtmlTaskContent> = ({
                                                                               task,
                                                                               allTaskLength
                                                                           }): JSX.Element | null => {

    // state with userCode from editor output
    const [userCode, setUserCode] = useState<string>("")

    // state with result code, which is display in iFrame
    const [resultCode, setResultCode] = useState<string>("")

    // state with annotations from editor
    const [annotations, setAnnotations] = useState<any[]>([])

    const [taskTargets, setTaskTargets] = useState<IFTaskTargets[]>(task.targets)

    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false)

    // state with editor font size from localStorage
    const [editorFs, setEditorFs] = useState<number>(getEditorFSize)

    // state with editor theme from localStorage
    const [editorTheme, setEditorTheme] = useState<string>(getEditorTheme)

    // state with flag, which is responsible for animation when the user correctly completes the task targets
    const [successfulFlag, setSuccessfulFlag] = useState<boolean>(false)

    // state with flag, which is responsible for displaying error about user code
    const [errorFlag, setErrorFlag] = useState<boolean>(false)

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

    // remove error when user type correct code
    useEffect(() => {
        if(annotations.length === 0){
            setErrorFlag(false)
        }
    }, [annotations])

    // task validation
    const checkTask = (): void => {
        if (annotations.length === 0) {
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
                // set the animation
                setSuccessfulFlag(true)
                // save solved task title to ls, so that the user knows which tasks he has completed
                saveSolvedTaskToLS(task.title, "solvedHtmlTasks")
            } else {
                setSuccessfulFlag(false)
            }
        }
        else {
            setErrorFlag(true)
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

    const handleToggleEditorSettings = () => setEditorFormFlag(!editorFormFlag)

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
                <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                  imgAlt={htmlClass.getFigureAlt()} imgSrc={htmlClass.getFigureSrc()}/>
                {/*decorations*/}
                <HtmlDecorationIntroduction/>
            </HtmlTaskIntroduction>
            {/*task target and instructions*/}
            <HtmlTaskTarget>
                <TaskTargets targets={taskTargets} title={task.title} aidArr={task.aid}/>
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
                onValidate={vl => setAnnotations(vl.filter((el : any)=> el.type === "error"))}
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
                {editorFormFlag &&
                <TaskAceEditorSettings handleChangeTheme={handleChangeTheme} editorTheme={editorTheme}
                                       handleChangeFs={handleChangeFs} editorFs={editorFs}
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
    </TaskContentWrapper>
}
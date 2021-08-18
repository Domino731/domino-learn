import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {
    CodeEditorError,
    CodeEditorPanel,
    CodeEditorPanelBtn,
    EditorSettingsCloseIcon,
    EditorSettingsFSize,
    EditorSettingsLabel,
    EditorSettingsThemesWrapper,
    EditorSettingsWrapper,
    TaskAidsList,
    TaskAidsTitle,
    TaskAidsWrapper,
    TaskContentWrapper,
    TaskIntroductionBar,
    TaskIntroductionText,
    TaskSectionHeader, TaskSuccessfulBar, TaskSuccessfulImg, TaskSuccessfulTitle,
    TaskTarget,
    TaskTargetCheckbox,
    TaskTargetNumber,
    TaskTargetsWrapper,
    TaskTargetText,
    WebBrowserGreenBox,
    WebBrowserRedBox,
    WebBrowserTopBar,
    WebBrowserWindow,
    WebBrowserYellowBox
} from "../../style/elements/tasks/task";
import {IFJsTaskTargets, IFPropsJsTask} from "../../types/types";
import 'ace-builds/src-noconflict/mode-javascript'
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
    JsCodeEditorWrapper,
    JsIntroduction,
    JsResult,
    JsTargets,
    JsConsoleWrapper,
    JsTaskSuccessful,
    JsDecorationIntroduction
} from "../../style/elements/tasks/jsTask";
import {TaskAid} from "../task/TaskAid";
import AceEditor from "react-ace";
import {
    getEditorFSize,
    getEditorTheme, getJsTaskCodeFromLS, getJsTaskTargetsFromLS,
    saveJsTaskSolutionToLS, saveSolvedTaskToLS
} from "../../functions/localStorage";
import {Console, Hook, Unhook} from 'console-feed'
import {Logs} from "../../functions/jsConsole";
import {taskValidationJS} from "../../functions/taskValidationJS";
import {Link} from "react-router-dom";
import {jsClass} from "../../properties/jsClass";
import {TaskIntroduction} from "../task/TaskIntroduction";
import {htmlClass} from "../../properties/htmlClass";
import {TaskTargets} from "../task/TaskTargets";
import {TaskAceEditorSettings} from "../task/TaskAceEditorSettings";

const beautifyJs = require('js-beautify').js;

export const JsTaskContent: FunctionComponent<IFPropsJsTask> = ({task, allTaskLength}): JSX.Element => {

    // state with userCode from editor output
    const [userCode, setUserCode] = useState<string>(task.code);

    // state with task targets
    const [taskTargets, setTaskTargets] = useState<IFJsTaskTargets[]>(task.targets)

    // state with annotations from editor
    const [annotations, setAnnotations] = useState<any[]>([])

    // state with editor font size from localStorage
    const [editorFs, setEditorFs] = useState<number>(getEditorFSize);

    // state with editor theme from localStorage
    const [editorTheme, setEditorTheme] = useState<string>(getEditorTheme);

    // state with flag, when user change it, editor settings form will be showed
    const [editorFormFlag, setEditorFormFlag] = useState<boolean>(false);

    // state with console logs
    const [logs, setLogs] = useState<any[]>([]);

    const [consoleTextArr, setConsoleTextArr] = useState<any[]>([])

    // state with flag, which is responsible for animation when the user correctly completes the task targets
    const [successfulFlag, setSuccessfulFlag] = useState<boolean>(false)

    // state with flag, which is responsible for displaying error about user code
    const [errorFlag, setErrorFlag] = useState<boolean>(false)


    const [points, setPoints] = useState<{ user: number, needed: number }>({user: 0, needed: task.targets.length})

    // save font size into local storage
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorFs.toString())
    }, [editorFs])

    // save theme into local storage
    useEffect(() => {
        localStorage.setItem("editorTheme", editorTheme)
    }, [editorTheme])

    // check if the user hasn't already solved the task, if he  has solved it,
    // get it from local storage and if not, return the default value (task.targets)
    useEffect(() => {
        getJsTaskCodeFromLS(setUserCode, task.title, task.code)
        getJsTaskTargetsFromLS(setTaskTargets, task.title, task.targets)
    }, [task])

    // run once!
    // @ts-ignore
    useEffect(() => {
        Hook(
            window.console,
            (log) => {
                // @ts-ignore
                if (log.method === "log") {
                    setLogs((currLogs) => [...currLogs, log])
                }
            },
            false,
        )
        // @ts-ignore
        return () => Unhook(window.console)
    }, []);

    useEffect(() => {
        setConsoleTextArr(logs.map(el => el.data[0]))
    }, [logs.length])


    useEffect(() => {
        const consoleTextArr = logs.map(el => el.data[0]);
        if (consoleTextArr.length > 0 && annotations.length === 0) {
            taskTargets.map(el => taskValidationJS(consoleTextArr, el, addPoints));
            saveJsTaskSolutionToLS(taskTargets, task.title, userCode);
            // save solved task title to ls, so that the user knows which tasks he has completed
            saveSolvedTaskToLS(task.title, "solvedJsTasks");
        }

    }, [logs.length]);

    useEffect(() => {
        if (points.user >= points.needed) {
            setSuccessfulFlag(true)
        } else {
            setSuccessfulFlag(false)
        }
    }, [points])

    // remove error when user type new code
    useEffect(() => {
        setErrorFlag(false)
    }, [annotations])

    const addPoints = () => setPoints(prev => ({...prev, user: prev.user++}))

    // change editor font-size
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorFs(parseFloat(e.target.value));

    // change theme
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorTheme(e.target.value);

    // change code from
    const changeUserCode = (newValue: string): void => setUserCode(newValue)

    // reset code in editor by original code from task
    const handleResetCode = (): void => {
        return setUserCode(beautifyJs(task.code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}));
    }
    const handleToggleEditorSettings = () => setEditorFormFlag(!editorFormFlag)
    const handleResetPoints = (): void => setPoints({user: 0, needed: task.targets.length})
    const consoleRef = useRef<HTMLDivElement>(null)

    // set the console logs by which useEffect will start the task validation
    const setConsole = () => {
        // set the console
        Logs(userCode);

        // format user code
        setUserCode(beautifyJs(userCode, {
            indent_size: 1,
            space_in_empty_paren: false,
            wrap_line_length: 50
        }));

        // display the error window when user code have warnings
        if(annotations.length > 0){
            setErrorFlag(true)
        }
    };

    return <TaskContentWrapper>

        {successfulFlag === false && <>
            <JsIntroduction>
                <TaskIntroduction title={task.title} introductionInnerHtml={task.introduction}
                                  imgAlt={jsClass.getFigureAlt()} imgSrc={jsClass.getFigureSrc()}/>
                {/*decorations*/}
                <JsDecorationIntroduction/>
            </JsIntroduction>

            <JsTargets>
                <TaskTargets targets={taskTargets} title={task.title} aidArr={task.aid}/>
            </JsTargets>
        </>}

        {successfulFlag && <JsTaskSuccessful>
            <TaskSuccessfulImg src={jsClass.getFigureSrc()} alt={jsClass.getFigureAlt()}/>
            <TaskSuccessfulTitle>Congratulations, you have completed the task correctly</TaskSuccessfulTitle>
            <TaskSuccessfulBar color="#b5179e">
                <button onClick={handleResetPoints}>Close</button>
                {task.number < allTaskLength && <Link to={`/js-task/${task.number + 1}`}>Next task</Link>}
            </TaskSuccessfulBar>
        </JsTaskSuccessful>}

        <JsResult>
            <WebBrowserWindow>
                <WebBrowserTopBar>
                    <WebBrowserGreenBox/>
                    <WebBrowserYellowBox/>
                    <WebBrowserRedBox/>
                </WebBrowserTopBar>
                <JsConsoleWrapper ref={consoleRef}>
                    <Console logs={logs} variant="light"/>
                </JsConsoleWrapper>
            </WebBrowserWindow>
        </JsResult>

        <JsCodeEditorWrapper>
            {/*code editor - ace*/}
            <AceEditor
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                onChange={changeUserCode}
                mode="javascript"
                theme={editorTheme}
                width="100%"
                height="100%"
                value={userCode}
                fontSize={editorFs}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                onValidate={vl => setAnnotations(vl.filter((el: any) => el.type === "error"))}
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
                <CodeEditorPanelBtn onClick={setConsole}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
            </CodeEditorPanel>
            {errorFlag && <CodeEditorError><i className="fas fa-exclamation-circle"/>Check your code</CodeEditorError>}
        </JsCodeEditorWrapper>

    </TaskContentWrapper>
}
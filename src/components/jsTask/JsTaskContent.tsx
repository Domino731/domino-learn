import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {
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
    TaskSectionHeader,
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
    JsConsoleWrapper
} from "../../style/elements/tasks/jsTask";
import {cssClass} from "../../properties/cssClass";
import {TaskAid} from "../task/TaskAid";
import AceEditor from "react-ace";
import {getEditorFSize, getEditorTheme} from "../../functions/localStorage";
import {Console, Hook, Unhook} from 'console-feed'
import {Logs} from "../../functions/jsConsole";
import {taskValidationJS} from "../../functions/taskValidationJS";

const beautifyJs = require('js-beautify').js;

export const JsTaskContent: FunctionComponent<IFPropsJsTask> = ({task, allTaskLength}): JSX.Element => {

    // state with userCode from editor output
    const [userCode, setUserCode] = useState<string>(task.code);

    // state with task targets
    const [taskTargets, setTaskTargets] = useState<IFJsTaskTargets[]>(task.targets)

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
        const consoleTextArr = logs.map(el => el.data[0])

        // points needed to pass
        const pointsNeeded: number = task.targets.length
        // user points
        let userPoints = 0
        // function that add pun when user complete task correctly
        const changeUserPoints = (): number => userPoints++

        taskTargets.map(el => taskValidationJS(consoleTextArr, el, changeUserPoints))

        // check if user has executed all targets, if he did display animation
        if (userPoints === pointsNeeded) {
            setSuccessfulFlag(true)
        } else {
            setSuccessfulFlag(false)
        }
    }, [logs.length])


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
    };

    return <TaskContentWrapper>
        <JsIntroduction>
            <TaskSectionHeader><i className="fas fa-book-open"/> <span>Introduction</span></TaskSectionHeader>
            <TaskIntroductionBar>
                <img src={cssClass.getFigureSrc()} alt={cssClass.getFigureAlt()}/>
                <h3>{task.title}</h3>
            </TaskIntroductionBar>

            <TaskIntroductionText dangerouslySetInnerHTML={{__html: task.introduction}}>
            </TaskIntroductionText>

            {/*decorations*/}

        </JsIntroduction>

        <JsTargets>
            <TaskSectionHeader><i className="fas fa-bullseye"/> <span>Your task</span></TaskSectionHeader>
            <TaskTargetsWrapper>
                {task.targets.map((el, num) => <TaskTarget key={`${task.title}_taskTarget_${num}`}>

                    {el.solved === null && <TaskTargetCheckbox backgroundColor={"#e5e3f1"}/>}
                    {el.solved === false && <TaskTargetCheckbox backgroundColor={"#f9320c"}><i
                        className="fas fa-times"/></TaskTargetCheckbox>}
                    {el.solved === true &&
                    <TaskTargetCheckbox backgroundColor={"#75D701"}><i
                        className="fas fa-check"/></TaskTargetCheckbox>}
                    <TaskTargetNumber>{el.number}. </TaskTargetNumber>
                    <TaskTargetText dangerouslySetInnerHTML={{__html: el.target}}/>
                </TaskTarget>)}

                {/*task aids*/}
                <TaskAidsWrapper>
                    <TaskAidsTitle>Task aids</TaskAidsTitle>
                    <TaskAidsList>
                        {task.aid.map((el, num) => <TaskAid aid={el} key={`${task.title}_taskAid_${num}`}/>)}
                    </TaskAidsList>
                </TaskAidsWrapper>
            </TaskTargetsWrapper>
        </JsTargets>

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
                <CodeEditorPanelBtn onClick={setConsole}><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
            </CodeEditorPanel>
        </JsCodeEditorWrapper>

    </TaskContentWrapper>
}
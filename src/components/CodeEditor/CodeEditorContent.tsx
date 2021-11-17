import AceEditor from "react-ace"
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
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
import React, {FunctionComponent, useEffect, useState} from "react";
import {
    EditorConsoleSwitchBtn,
    EditorContentWrapper,
    EditorCss,
    EditorDevPanel,
    EditorFullScreenBtn,
    EditorHtml,
    EditorJs, EditorName,
    EditorResult, MobileEditorContentWrapper, MobileEditorSwitchBar, MobileEditorSwitchOption, MobileItemWrapper
} from "../../style/elements/codeEditor/codeEditor";
import {IFEditorCode, IFPropsCodeEditorContent} from "../../types/types";
import {saveEditorCodeToLS, getEditorCodeFromLS} from "../../functions/localStorage";
import {
    WebBrowserGreenBox,
    WebBrowserRedBox,
    WebBrowserTopBar, WebBrowserWindow,
    WebBrowserYellowBox
} from "../../style/elements/tasks/task";
import {Console, Hook, Unhook} from "console-feed";
import {Logs} from "../../functions/jsConsole";

// Component which is responsible for the editor, there are two versions - for mobile devices (below 900px window width)
// and for larger devices (above 900px)
export const CodeEditorContent: FunctionComponent<IFPropsCodeEditorContent> = ({editorSettings}): JSX.Element => {

    // State with user code
    const [userCode, setUserCode] = useState<IFEditorCode>(getEditorCodeFromLS({html: "", css: "", js: ""}));

    // state with final code which is in iframe
    const [srcDoc, setSrcDoc] = useState<string>("");

    // state with console logs which are passed to Console component,
    // by which user can see console
    const [logs, setLogs] = useState<any[]>([]);

    // state which is responsible to display console or iframe window
    const [consoleFlag, setConsoleFlag] = useState<boolean>(false);

    // state to toggle fullscreen mode
    const [fullscreenFlag, setFullscreenFlag] = useState<boolean>(false);
    // window width which is needed to display editor for mobile devices (less than 900px window width)
    const [windowWidth, setWindowWidth] = useState(0);

    // specifies which editor is active on mobile devices (less than 900px window width)
    const [activeEditor, setActiveEditor] = useState<string>("html");

    // set the windowWidth state based on window width
    const resizeWindow = (): void => setWindowWidth(window.innerWidth);
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    // delay (300s) for displaying user code in iframe -> better for the browser,
    // because it doesn't have to rerender on every code change,
    // a new iframe with every code change
    useEffect(() => {
        const timeout = setTimeout(() => {
                setSrcDoc(`
        <!DOCTYPE html>
          <html lang="en">
          <head>
          <title>DOMINO EDITOR</title>
          <style>
          ${userCode.css}
          </style></head>
          <body>${userCode.html}</body>
          <script>${userCode.js}</script>
          </html>`);
                // set the console
                Logs(userCode.js);
            }
            , 300);
        // prevent console duplicates
        setLogs([]);
        return () => clearTimeout(timeout);
    }, [userCode]);

    // saving code into local storage with 600ms delay
    useEffect(() => {
        const timeout = setTimeout(() => {
            saveEditorCodeToLS(userCode)
        }, 600)
        return () => clearTimeout(timeout);
    }, [userCode])


    // run once!, hook  which sets the logs state,
    // which is responsible for displaying the content in the console
    // @ts-ignore
    useEffect(() => {
        setLogs([]);
        Hook(
            window.console,
            (log) => {
                if (log.method === "log") {
                    setLogs((currLogs) => [...currLogs, log]);
                }
            },
            false,
        );
        // @ts-ignore
        return () => Unhook(window.console);
    }, []);

    /** toggle editor on mobile devices (only less than 900px window width) */
    const handleChangeActiveEditor = (e: React.ChangeEvent<HTMLInputElement>): void => setActiveEditor(e.target.value)

    /** change userCode state  */
    const changeUserCode = (newValue: any, key: "html" | "css" | "js"): void => setUserCode(prev => ({
        ...prev,
        [key]: newValue
    }));

    /** show or hide console */
    const handleChangeConsoleFlag = (): void => setConsoleFlag(!consoleFlag);

    /** change fullscreenFlag state -> display page in fullscreen mode */
    const handleChangeFullScreenFlag = () => setFullscreenFlag(!fullscreenFlag);

    return <>
        {/* editor for bigger devices -> above 900px*/}
        {windowWidth > 900 && <EditorContentWrapper areas={editorSettings.areas}>
            <EditorHtml>
                <EditorName>
                    .html
                </EditorName>
                <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={(newValue) => changeUserCode(newValue, "html")}
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
                />
            </EditorHtml>
            <EditorCss>
                <EditorName>
                    .css
                </EditorName>
                <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={(newValue) => changeUserCode(newValue, "css")}
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
                />
            </EditorCss>
            <EditorJs>
                <EditorName>
                    .js
                </EditorName>
                <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={(newValue) => changeUserCode(newValue, "js")}
                    mode="javascript"
                    theme={editorSettings.theme}
                    width="100%"
                    height="100%"
                    value={userCode.js}
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
            </EditorJs>
            <EditorResult  fullscreen={fullscreenFlag}>
               <EditorDevPanel>

 {/*toggle console*/}
                <EditorConsoleSwitchBtn style={{background: "#e5e3f1"}} onClick={handleChangeConsoleFlag}>
                    {consoleFlag ?
                        <><i className="fas fa-arrow-left"/> Back </>
                        :
                        <><i className="fas fa-terminal"/> Console </>
                    }
                </EditorConsoleSwitchBtn>

               <EditorFullScreenBtn style={{background: "#e5e3f1"}} onClick={handleChangeFullScreenFlag}>
                    {fullscreenFlag ?
                        <><i className="fas fa-compress-arrows-alt"/> Minimize </>
                        :
                        <><i className="fas fa-expand-arrows-alt"/> Fullscreen </>
                    }
                </EditorFullScreenBtn >

               


            </EditorDevPanel>

                {/*iframe window or console with user code*/}
                <WebBrowserWindow>
                    <WebBrowserTopBar>
                        <WebBrowserGreenBox/>
                        <WebBrowserYellowBox/>
                        <WebBrowserRedBox/>
                    </WebBrowserTopBar>
                    {consoleFlag === false && <iframe srcDoc={srcDoc}
                                                      width="100%" height="100%" frameBorder="0" sandbox="allow-scripts"
                                                      title="output"
                    />}
                    {consoleFlag && <Console logs={logs} variant="light"/>}
                </WebBrowserWindow>
            </EditorResult>
        </EditorContentWrapper>}


        {/*editor for mobiles devices!!!!*/}
        {windowWidth <= 900 && <MobileEditorContentWrapper>

            {/*header where the user can switch between editor, window with his code(iframe) or console*/}
            <MobileEditorSwitchBar>
                <MobileEditorSwitchOption>
                    <input type="checkbox"
                           value="html"
                           name="switchToHtml"
                           checked={activeEditor === "html"}
                           onChange={handleChangeActiveEditor}/>
                    <span>HTML</span>
                </MobileEditorSwitchOption>
                <MobileEditorSwitchOption>
                    <input type="checkbox"
                           value="css"
                           name="switchToCss"
                           checked={activeEditor === "css"}
                           onChange={handleChangeActiveEditor}/>
                    <span>CSS</span>
                </MobileEditorSwitchOption>
                <MobileEditorSwitchOption>
                    <input type="checkbox"
                           value="js"
                           name="switchToJs"
                           checked={activeEditor === "js"}
                           onChange={handleChangeActiveEditor}/>
                    <span>JS</span>
                </MobileEditorSwitchOption>
                <MobileEditorSwitchOption>
                    <input type="checkbox"
                           value="result"
                           name="switchToResult"
                           checked={activeEditor === "result"}
                           onChange={handleChangeActiveEditor}/>
                    <span>Result</span>
                </MobileEditorSwitchOption>
                <MobileEditorSwitchOption>
                    <input type="checkbox"
                           value="console"
                           name="switchToConsole"
                           checked={activeEditor === "console"}
                           onChange={handleChangeActiveEditor}/>
                    <span>Console</span>
                </MobileEditorSwitchOption>
            </MobileEditorSwitchBar>

            <MobileItemWrapper>
                {activeEditor === "html" && <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={(newValue) => changeUserCode(newValue, "html")}
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

                {activeEditor === "css" && <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={(newValue) => changeUserCode(newValue, "css")}
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

                {activeEditor === "js" && <AceEditor
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    onChange={(newValue) => changeUserCode(newValue, "js")}
                    mode="javascript"
                    theme={editorSettings.theme}
                    width="100%"
                    height="100%"
                    value={userCode.js}
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

                {/*iframe window with user code*/}
                {activeEditor === "result" && <WebBrowserWindow>
                    <WebBrowserTopBar>
                        <WebBrowserGreenBox/>
                        <WebBrowserYellowBox/>
                        <WebBrowserRedBox/>
                    </WebBrowserTopBar>
                    <iframe srcDoc={srcDoc}
                            width="100%" height="100%" frameBorder="0" sandbox="allow-scripts"
                            title="output"
                    />

                </WebBrowserWindow>}

                {/*console with user js code*/}
                {activeEditor === "console" && <WebBrowserWindow>
                    <WebBrowserTopBar>
                        <WebBrowserGreenBox/>
                        <WebBrowserYellowBox/>
                        <WebBrowserRedBox/>
                    </WebBrowserTopBar>
                    <Console logs={logs} variant="light"/>
                </WebBrowserWindow>}

            </MobileItemWrapper>
        </MobileEditorContentWrapper>}

    </>
}
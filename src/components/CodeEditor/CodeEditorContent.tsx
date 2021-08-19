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
    EditorHtml,
    EditorJs, EditorName,
    EditorResult
} from "../../style/elements/codeEditor/codeEditor";
import {IFEditorCode} from "../../types/types";
import {getEditorFSize, getEditorTheme, saveEditorCodeToLS, getEditorCodeFromLS} from "../../functions/localStorage";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";
import {
    WebBrowserGreenBox,
    WebBrowserRedBox,
    WebBrowserTopBar, WebBrowserWindow,
    WebBrowserYellowBox
} from "../../style/elements/tasks/task";
import {Console, Hook, Unhook} from "console-feed";
import {Logs} from "../../functions/jsConsole";


export const CodeEditorContent: FunctionComponent = (): JSX.Element => {

    // State with user code
    const [userCode, setUserCode] = useState<IFEditorCode>(getEditorCodeFromLS({html: "", css: "", js: ""}));

    // state with final code which is in iframe
    const [srcDoc, setSrcDoc] = useState<string>("");

    // state with console logs
    const [logs, setLogs] = useState<any[]>([]);

    const [consoleFlag, setConsoleFlag] = useState<boolean>(false);
    // state with editor theme from localStorage
    const [editorTheme, setEditorTheme] = useState<string>(getEditorTheme);

    // state with editor font size from localStorage
    const [editorFs, setEditorFs] = useState<number>(getEditorFSize);
useEffect(()=>{

},[])
    // delay (300s) for displaying user code in iframe -> better for the browser, because it doesn't have to rerender
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
        // prevent of console duplicates
        setLogs([]);
        return () => clearTimeout(timeout);
    }, [userCode]);

    // saving code into local storage
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            saveEditorCodeToLS(userCode)
        },600)
        return () => clearTimeout(timeout);
    },[userCode])


    // run once!
    // @ts-ignore
    useEffect(() => {
        setLogs([]);
        Hook(
            window.console,
            (log) => {
                // @ts-ignore
                if (log.method === "log") {
                    setLogs((currLogs) => [...currLogs, log])
                }
            },
            false,
        );
        // @ts-ignore
        return () => Unhook(window.console);
    }, []);


    const changeUserCode = (newValue: any, key: "html" | "css" | "js"): void => setUserCode(prev => ({
        ...prev,
        [key]: newValue
    }));

    const handleChangeConsoleFlag = (): void => setConsoleFlag(!consoleFlag);

    const areas = `"html html result"
                   "css css result"
                   "js js result"`;


    return <EditorContentWrapper areas={areas}>
        <EditorHtml>
            <EditorName>
                <img src={htmlClass.getIconSrc()} alt="html icon"/>
            </EditorName>
            <AceEditor
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                onChange={(newValue) => changeUserCode(newValue, "html")}
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
            />
        </EditorHtml>
        <EditorCss>
            <EditorName>
                <img src={cssClass.getIconSrc()} alt="css icon"/>
            </EditorName>
            <AceEditor
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                onChange={(newValue) => changeUserCode(newValue, "css")}
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
            />
        </EditorCss>
        <EditorJs>
            <EditorName>
                <img src={jsClass.getIconSrc()} alt="javascript icon"/>
            </EditorName>
            <AceEditor
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                onChange={(newValue) => changeUserCode(newValue, "js")}
                mode="javascript"
                theme={editorTheme}
                width="100%"
                height="100%"
                value={userCode.js}
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
        </EditorJs>
        <EditorResult>
            <EditorConsoleSwitchBtn style={{background: "#e5e3f1"}} onClick={handleChangeConsoleFlag}>
                {consoleFlag ?
                    <><i className="fas fa-arrow-left"/> Back </>
                    :
                    <><i className="fas fa-terminal"/> Console </>
                }
            </EditorConsoleSwitchBtn>
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
    </EditorContentWrapper>
}
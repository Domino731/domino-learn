import AceEditor from "react-ace"
import 'ace-builds/src-noconflict/mode-css'
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
import "ace-builds/src-noconflict/snippets/python"
import {FunctionComponent, useEffect, useState} from "react";
import {IFPropsTaskAceEditor} from "../../types/types";

export const TaskAceEditor : FunctionComponent<IFPropsTaskAceEditor> = ({mode,changeUserCode, editorTheme, userCode, editorFS,
                                                                            addAnnotations}) : JSX.Element  => {
    const [valid, setValid] = useState<any>([])

    useEffect(()=>{
        addAnnotations(valid.filter((el : any)=> el.type === "error"))
    },[valid])
    return <AceEditor
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        onChange={changeUserCode}
        onValidate={(a) => setValid(a)}
        mode={mode}
        theme={editorTheme}
        width="100%"
        height="100%"
        value={userCode}
        fontSize={editorFS}
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
}
import {FunctionComponent, useEffect, useState} from "react";
import AceEditor from "react-ace";
import {IFPropsTaskAceEditor} from "../../types/types";
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-html'

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
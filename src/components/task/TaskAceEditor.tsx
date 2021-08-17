import {FunctionComponent} from "react";
import AceEditor from "react-ace";
import {IFPropsTaskAceEditor} from "../../types/types";
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-html'

export const TaskAceEditor : FunctionComponent<IFPropsTaskAceEditor> = ({mode,changeUserCode, editorTheme, userCode, editorFS}) : JSX.Element  => {
    return <AceEditor
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        onChange={changeUserCode}

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
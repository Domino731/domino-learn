import {FunctionComponent} from "react";
import {Container} from "../../style/general/generalStyles";
import {CodeEditorHeader} from "./CodeEditorHeader";
import {CodeEditorContent} from "./CodeEditorContent";

export const CodeEditor: FunctionComponent = (): JSX.Element => {
    return <Container>
        <CodeEditorHeader/>
        <CodeEditorContent/>
    </Container>
}
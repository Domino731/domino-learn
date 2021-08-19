import {FunctionComponent} from "react";
import {EditorHeaderWrapper, EditorHeaderLink, EditorHeaderSettingsIcon} from "../../style/elements/codeEditor/codeEditor";
import {Link} from "react-router-dom";

export const CodeEditorHeader : FunctionComponent = () => {
    return <EditorHeaderWrapper>
        <EditorHeaderLink>
            <Link to="/">
                   DOMINO LEARN
            </Link>
        </EditorHeaderLink>
        <EditorHeaderSettingsIcon>
            <i className="fas fa-cog"/>
            <span>Settings</span>
        </EditorHeaderSettingsIcon>
    </EditorHeaderWrapper>
}
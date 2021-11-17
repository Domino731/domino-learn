import React, {FunctionComponent, useEffect, useState} from "react";
import {CodeEditorHeader} from "./CodeEditorHeader";
import {CodeEditorContent} from "./CodeEditorContent";
import {IFEditorSettings} from "../../types/types";
import {getEditorAreas, getEditorFSize, getEditorTheme} from "../../functions/localStorage";
import {EditorContainer} from "../../style/elements/codeEditor/codeEditor";

// Component responsible for sandbox editor :)
export const CodeEditor: FunctionComponent = (): JSX.Element => {

    // editor settings which are passed to the CodeEditorContent component,
    // they can be changed in CodeEditorHeader component.
    const [editorSettings, setEditorSettings] = useState<IFEditorSettings>({
        fontSize: getEditorFSize(),
        theme: getEditorTheme(),
        areas: getEditorAreas(),
        includeResetCSS: localStorage.getItem('editorResetCSS') ? true : false
    });

    // if user change one of settings save them into local storage
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorSettings.fontSize.toString());
        localStorage.setItem("editorTheme", editorSettings.theme);
        localStorage.setItem("editorAreas", editorSettings.areas);
        localStorage.setItem("editorResetCSS", JSON.stringify(editorSettings.includeResetCSS))
    }, [editorSettings]);


    /** changing editor font size */
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        fontSize: parseFloat(e.target.value)
    }));

    /** changing editor theme */
    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        theme: e.target.value
    }));

   /** changing editor layout, CodeEditorContent displaying the layout of the editor is based on this areas (grid - areas) */
    const handleChangeAreas = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        areas: e.target.value
    }));
    
    /** change editorSettings.includeResetCSS state -> apply css reset or remove */
    const handleChangeResetCSS = () => {
        const data = localStorage.getItem('editorResetCSS');
        if(data) {
            if(JSON.parse(data)){
              return setEditorSettings(prev => ({
                ...prev,
                includeResetCSS: false
            }));  
            }
            else{
                return setEditorSettings(prev => ({
                    ...prev,
                    includeResetCSS: true
                }));  
            }
        }
        else {
            return setEditorSettings(prev => ({
                ...prev,
                includeResetCSS: true
            }));
        }
    }
    


    return <EditorContainer>
        <CodeEditorHeader editorSettings={editorSettings} changeFs={handleChangeFs} changeTheme={handleChangeTheme}
                          changeAreas={handleChangeAreas} changeResetCSS={handleChangeResetCSS} includeResetCSS={editorSettings.includeResetCSS}/>
        <CodeEditorContent editorSettings={editorSettings}/>
    </EditorContainer>
};
import React, {FunctionComponent, useEffect, useState} from "react";
import {CodeEditorHeader} from "./CodeEditorHeader";
import {CodeEditorContent} from "./CodeEditorContent";
import {IFEditorSettings} from "../../types/types";
import {getEditorAreas, getEditorFSize, getEditorTheme} from "../../functions/localStorage";
import {EditorContainer} from "../../style/elements/codeEditor/codeEditor";

/** Component which is gathering whole content for sandbox editor, and its responsible for editor settings  */
export const CodeEditor: FunctionComponent = (): JSX.Element => {

    // editor settings which are passed to the CodeEditorContent component,
    // they can be changed in CodeEditorHeader component.
    const [editorSettings, setEditorSettings] = useState<IFEditorSettings>({
        fontSize: getEditorFSize(),
        theme: getEditorTheme(),
        areas: getEditorAreas(),
        includeResetCSS: localStorage.getItem('editorResetCSS') ? true : false
    });

    // if user change one of settings then save them into local storage
    useEffect(() => {
        localStorage.setItem("editorFontSize", editorSettings.fontSize.toString());
        localStorage.setItem("editorTheme", editorSettings.theme);
        localStorage.setItem("editorAreas", editorSettings.areas);
        localStorage.setItem("editorResetCSS", JSON.stringify(editorSettings.includeResetCSS))
    }, [editorSettings]);


    /** changing editorSettings.fontSize state -> change font size for editor */
    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>): void => setEditorSettings(prev => ({
        ...prev,
        fontSize: parseFloat(e.target.value)
    }));

    /** changing editorSettings.theme state -> change theme for editor*/
    const handleChangeTheme = (theme: string): void => setEditorSettings(prev => ({
        ...prev,
        theme: theme
    }));

   /** changing editorSettings.areas, CodeEditorContent layout is using grid-area property and its uses areas*/
    const handleChangeAreas = (areas: string): void => setEditorSettings(prev => ({
        ...prev,
        areas: areas
    }));
    
    /** change editorSettings.includeResetCSS state -> apply css reset or remove */
    const handleChangeResetCSS = () => {
        const data = localStorage.getItem('editorResetCSS');

        // check if data exists
        if(data) {
            // check if user has already add reset for his css
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
        {/* editor header -> interface where user can managing his editor settings */}
        <CodeEditorHeader editorSettings={editorSettings} changeFs={handleChangeFs} changeTheme={handleChangeTheme}
                          changeAreas={handleChangeAreas} changeResetCSS={handleChangeResetCSS} includeResetCSS={editorSettings.includeResetCSS}/>

         {/* css, html and js code editors */}
        <CodeEditorContent editorSettings={editorSettings}/>
    </EditorContainer>
};
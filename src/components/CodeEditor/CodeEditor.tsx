import React, {FunctionComponent, useEffect, useState} from "react";
import {Container} from "../../style/general/generalStyles";
import {CodeEditorHeader} from "./CodeEditorHeader";
import {CodeEditorContent} from "./CodeEditorContent";
import {IFEditorSettings} from "../../types/types";
import {getEditorAreas, getEditorFSize, getEditorTheme} from "../../functions/localStorage";
import {EditorContainer} from "../../style/elements/codeEditor/codeEditor";

export const CodeEditor: FunctionComponent = (): JSX.Element => {

    // editor settings
    const [editorSettings, setEditorSettings] = useState<IFEditorSettings>({
        fontSize: getEditorFSize(),
        theme: getEditorTheme(),
        areas: getEditorAreas()
    })

    // save user settings to local storage
    useEffect(()=>{
        localStorage.setItem("editorFontSize", editorSettings.fontSize.toString())
        localStorage.setItem("editorTheme", editorSettings.theme)
        localStorage.setItem("editorAreas", editorSettings.areas)
    },[editorSettings])


    const handleChangeFs = (e: React.ChangeEvent<HTMLInputElement>) : void => setEditorSettings(prev => ({
        ...prev,
        fontSize: parseFloat(e.target.value)
    }));

    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) : void => setEditorSettings(prev => ({
        ...prev,
        theme: e.target.value
    }))

    const handleChangeAreas = (e: React.ChangeEvent<HTMLInputElement>) : void => setEditorSettings(prev => ({
        ...prev,
        areas: e.target.value
    }))


    return <EditorContainer>
        <CodeEditorHeader editorSettings={editorSettings} changeFs={handleChangeFs} changeTheme={handleChangeTheme} changeAreas={handleChangeAreas}/>
        <CodeEditorContent editorSettings={editorSettings}/>
    </EditorContainer>
}
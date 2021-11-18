import { FunctionComponent, useEffect, useState } from "react";
import {
    EditorHeaderWrapper,
    EditorHeaderLink,
    EditorHeaderSettingsBtn,
    EditorSettingsForm,
    EditorFormItem,
    EditorFormLabel,
    EditorFormThemes,
    EditorFormThemesWrapper,
    EditorFormTheme,
    EditorFormThemeHtml, EditorFormThemeCss, EditorFormThemeJs, EditorFormThemeResult, EditorFormTitle, EditorResetCSSChekbox
} from "../../style/elements/codeEditor/codeEditor";
import { Link } from "react-router-dom";
import { IFPropsCodeEditorHeader } from "../../types/types";
import { codeEditorAreas } from "../../properties/codeEditorAreas";

/**
 * component with header for sandbox editor, with ability to managing editor settings -> theme, reset css, font size, layout 
 * @param editorSettings - current settings for editor
 * @param changeFs - function that will change editor font-size 
 * @param changeTheme - function that will change editor theme
 * @param chageAreas - function that will change value with grid areas for editor
 * @param includeResetCSS - boolean value which is define if user has already added reset for css
 */
export const CodeEditorHeader: FunctionComponent<IFPropsCodeEditorHeader> = ({
    editorSettings,
    changeFs,
    changeTheme,
    changeAreas,
    changeResetCSS,
    includeResetCSS
}) => {

    // flag to toggle editor settings
    const [formFlag, setFormFlag] = useState<boolean>(false);

    // width of the window, which is needed to render the container with ability to change editor layout,
    // the user can only change the editor layout above 900px
    const [windowWidth, setWindowWidth] = useState(0);

    // set the windowWidth state based on window width
    const resizeWindow = (): void => setWindowWidth(window.innerWidth);

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    /** toggle settings for editor */
    const handleChangeFormFlag = (): void => setFormFlag(!formFlag);

    return <EditorHeaderWrapper>

        {/*title*/}
        <EditorHeaderLink>
            <Link to="/">
                DOMINO LEARN
            </Link>
        </EditorHeaderLink>

        {/*toggle form button*/}
        <EditorHeaderSettingsBtn onClick={handleChangeFormFlag}>
            {formFlag ?
                <i className="fas fa-times" />
                :
                <i className="fas fa-cog" />
            }
            <span>Settings</span>
        </EditorHeaderSettingsBtn>

        {/* editor settings */}
        {formFlag && <EditorSettingsForm>

            {/* add css reset */}
            <EditorResetCSSChekbox>
                <input type='checkbox' checked={includeResetCSS} onChange={changeResetCSS} />
                <i className="fas fa-check"></i>
                <span>
                    Add CSS reset from meyerweb.com
                </span>
            </EditorResetCSSChekbox>

            {/*change font size*/}
            <EditorFormItem>
                <EditorFormLabel>Font size
                    <input type="number" min="1" max="60" step="1" name="editorFontSize" value={editorSettings.fontSize}
                        onChange={changeFs} />
                </EditorFormLabel>
            </EditorFormItem>

            {/*change editor theme*/}
            <EditorFormTitle>Theme</EditorFormTitle>
            <EditorFormThemes>
                <label>
                    Monokai
                    <input type="checkbox" value="monokai" name="monokai" checked={editorSettings.theme === "monokai"}
                        onChange={() => changeTheme("monokai")} />
                    <span />
                </label>
                <label>
                    Ambiance
                    <input type="checkbox" value="ambiance" name="ambiance"
                        checked={editorSettings.theme === "ambiance"}
                        onChange={() => changeTheme("ambiance")} />
                    <span />
                </label>
                <label>
                    Clouds
                    <input type="checkbox" value="clouds" name="clouds" checked={editorSettings.theme === "clouds"}
                        onChange={() => changeTheme("clouds")} />
                    <span />
                </label>
                <label>
                    Dracula
                    <input type="checkbox" value="dracula" name="dracula" checked={editorSettings.theme === "dracula"}
                        onChange={() => changeTheme("dracula")} />
                    <span />
                </label>
                <label>
                    Solarized light
                    <input type="checkbox" value="solarized_light" name="solarized_light"
                        checked={editorSettings.theme === "solarized_light"}
                        onChange={() => changeTheme("solarized_light")} />
                    <span />
                </label>
                <label>
                    Crimson editor
                    <input type="checkbox" value="crimson_editor" name="crimson_editor"
                        checked={editorSettings.theme === "crimson_editor"}
                        onChange={() => changeTheme("crimson_editor")} />
                    <span />
                </label>
                <label>
                    Github
                    <input type="checkbox" value="github" name="github" checked={editorSettings.theme === "github"}
                        onChange={() => changeTheme("github" )} />
                    <span />
                </label>
                <label>
                    Terminal
                    <input type="checkbox" value="terminal" name="terminal"
                        checked={editorSettings.theme === "terminal"}
                        onChange={() => changeTheme("terminal" )} />
                    <span />
                </label>
            </EditorFormThemes>

            {/*change editor layout, only for devices above 900px*/}
            {windowWidth > 900 && <>
                <EditorFormTitle>Layout</EditorFormTitle>
                <EditorFormThemesWrapper>
                    {codeEditorAreas.map((el, num) => <EditorFormTheme key={`editor_layout_${num}`} areas={el}>
                        <input type="checkbox" checked={editorSettings.areas === el}
                            onChange={() => changeAreas(el)} />
                        <EditorFormThemeHtml />
                        <EditorFormThemeCss />
                        <EditorFormThemeJs />
                        <EditorFormThemeResult>
                            <i className="fas fa-check" />
                        </EditorFormThemeResult>
                    </EditorFormTheme>)}
                </EditorFormThemesWrapper>
            </>}

        </EditorSettingsForm>}
    </EditorHeaderWrapper>
};
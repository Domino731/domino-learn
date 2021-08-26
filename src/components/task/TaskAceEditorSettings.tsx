import {FunctionComponent} from "react";
import {
    EditorSettingsCloseIcon,
    EditorSettingsFSize,
    EditorSettingsLabel,
    EditorSettingsThemesWrapper, EditorSettingsWrapper
} from "../../style/elements/tasks/task";
import {IFPropsTaskAceEditorSettings} from "../../types/types";

/**
 * Component which allows to change editor settings
 * @param handleChangeTheme - function that change theme
 * @param editorTheme - selected theme
 * @param handleChangeFs - function that change font size
 * @param editorFs - actual font-size
 * @param toggleForm - function that hide this component
 */
export const TaskAceEditorSettings: FunctionComponent<IFPropsTaskAceEditorSettings> = ({
                                                                                           handleChangeTheme,
                                                                                           editorTheme,
                                                                                           handleChangeFs,
                                                                                           editorFs,
                                                                                           toggleForm
                                                                                       }): JSX.Element => {

    return <EditorSettingsWrapper>
        <EditorSettingsCloseIcon onClick={toggleForm}><i
            className="far fa-window-close"/></EditorSettingsCloseIcon>

        <EditorSettingsLabel>
            Change font size
            <EditorSettingsFSize type="number" min="1" max="60" step="1" value={editorFs}
                                 onChange={handleChangeFs} name="editorFontSize"/>
        </EditorSettingsLabel>


        <EditorSettingsLabel>
            Change theme
        </EditorSettingsLabel>

        <EditorSettingsThemesWrapper>
            <label>
                Monokai
                <input type="checkbox" value="monokai" checked={editorTheme === "monokai"}
                       onChange={handleChangeTheme}/>
                <span><i className="fas fa-check-square"/></span>
            </label>
            <label>
                Ambiance
                <input type="checkbox" value="ambiance" checked={editorTheme === "ambiance"}
                       onChange={handleChangeTheme}/>
                <span><i className="fas fa-check-square"/></span>
            </label>
            <label>
                Clouds
                <input type="checkbox" value="clouds" checked={editorTheme === "clouds"}
                       onChange={handleChangeTheme}/>
                <span><i className="fas fa-check-square"/></span>
            </label>
            <label>
                Dracula
                <input type="checkbox" value="dracula" checked={editorTheme === "dracula"}
                       onChange={handleChangeTheme}/>
                <span><i className="fas fa-check-square"/></span>
            </label>
            <label>
                Solarized light
                <input type="checkbox" value="solarized_light" checked={editorTheme === "solarized_light"}
                       onChange={handleChangeTheme}/>
                <span><i className="fas fa-check-square"/></span>
            </label>
            <label>
                Crimson editor
                <input type="checkbox" value="crimson_editor" checked={editorTheme === "crimson_editor"}
                       onChange={handleChangeTheme}/>
                <span><i className="fas fa-check-square"/></span>
            </label>
            <label>
                Github
                <input type="checkbox" value="github" checked={editorTheme === "github"}
                       onChange={handleChangeTheme}/>
                <span><i className="fas fa-check-square"/></span>
            </label>
            <label>
                Terminal
                <input type="checkbox" value="terminal" checked={editorTheme === "terminal"}
                       onChange={handleChangeTheme}/>
                <span><i className="fas fa-check-square"/></span>
            </label>
        </EditorSettingsThemesWrapper>
    </EditorSettingsWrapper>
}
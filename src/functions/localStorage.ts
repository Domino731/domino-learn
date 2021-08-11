/**
 * get editor font size from local storage, it not exist return default font size - 20
 */
export const getEditorFSize = (): number => {
    const fontSize = localStorage.getItem("editorFontSize")
    if (fontSize !== null) {
        return parseFloat(fontSize)
    } else {
        return 19
    }

}

/**
 * get editor theme from local storage, it not exist return default theme - monokai
 */
export const getEditorTheme = (): string => {
    const theme = localStorage.getItem("editorTheme")
    if (theme !== null) {
        return theme
    }
    return "monokai"
}
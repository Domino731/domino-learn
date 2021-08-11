import {TypeHtmlTaskSolution, TypeLSHtmlTaskSolutions} from "../types/types";
import {TypeTaskTargets} from "../firebase/operations";
const beautifyHtml = require('js-beautify').html
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
/**
 * Save task solution so that when the user returns to this task, he will have his solution
 * @param taskSolutions - taskSolutions that you want to save in local storage,
 * is needed, it has keys (false or true) that display the single task target has been completed (checkboxes)
 * @param taskName - task name for solutions, is needed after to download specific solutions for task
 * @param taskCode - code with solution, when user comes back he will have this code
 */
export const saveHtmlTaskSolutionToLS = (taskSolutions: TypeHtmlTaskSolution[], taskName: string, taskCode: string): void => {
    // object with task name, solutions, code
    const taskObj: TypeLSHtmlTaskSolutions = {
        taskName,
        taskCode, taskSolutions
    }

    // save solution into local storage
    if (localStorage.getItem("htmlTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: TypeLSHtmlTaskSolutions[] = []

        //prevention of duplicates
        localStorageData.forEach(el => {
            if (el.taskName !== taskName) {
                updatedLocalStorageData.push(el)
            }
        })

        // add new data into local storage
        updatedLocalStorageData.push(taskObj)
        localStorage.setItem("htmlTasksSolutions", JSON.stringify(updatedLocalStorageData))
    } else {
        let localStorageData: TypeLSHtmlTaskSolutions[] = []
        localStorageData.push(taskObj)
        localStorage.setItem("htmlTasksSolutions", JSON.stringify(localStorageData));
    }
}
/**
 * Get html task targets - information about which task is completed (checkboxes)
 * @param saveDataCallback - function that saves data
 * @param taskName - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getHtmlTaskTargetsFromLS = (saveDataCallback: (obj:any) => void, taskName : string, defaultValue: TypeTaskTargets[]) => {
    if (localStorage.getItem("htmlTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        const taskTargets = localStorageData.filter(el => el.taskName === taskName)
        taskTargets.length !== 0 ? saveDataCallback(taskTargets[0].taskSolutions) : saveDataCallback(defaultValue)
    }
}
/**
 * Get user's html task solution code
 * @param saveDataCallback - function that saves data
 * @param taskName - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getHtmlTaskCodeFromLS = (saveDataCallback: (obj:any) => void, taskName : string, defaultValue: string) => {
    if (localStorage.getItem("htmlTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        const taskSolutionCode = localStorageData.filter(el => el.taskName === taskName)
        if(taskSolutionCode.length !== 0){
            saveDataCallback(beautifyHtml(taskSolutionCode[0].taskCode, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}))
        }
        else{
            saveDataCallback(beautifyHtml(defaultValue, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}))
        }
    }
}
import {
    IFCssTaskTargetCss,
    IfCssTaskTargetHtml, IFJsTaskTargets,
    IFLSCssTaskSolutions, IFLSjsTaskSolutions,
    TypeHtmlTaskSolution,
    TypeLSHtmlTaskSolutions
} from "../types/types";
import {IFTaskTargets} from "../types/types";

const beautifyHtml = require('js-beautify').html
const beautifyCss = require('js-beautify').css
const beautifyJs = require('js-beautify').js;
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
 * @param.taskTitle - task name for solutions, is needed after to download specific solutions for task
 * @param userCode - code with solution, when user comes back he will have this code
 */
export const saveHtmlTaskSolutionToLS = (taskSolutions: TypeHtmlTaskSolution[], taskTitle: string, userCode: string): void => {
    // object with task name, solutions, code
    const taskObj: TypeLSHtmlTaskSolutions = {
        title: taskTitle,
        code: userCode, taskSolutions
    }

    // save solution into local storage
    if (localStorage.getItem("htmlTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: TypeLSHtmlTaskSolutions[] = []

        //prevention of duplicates
        localStorageData.forEach(el => {
            if (el.title !== taskTitle) {
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

export const saveCssTaskSolutionToLS = (taskSolutions: (IFCssTaskTargetCss | IfCssTaskTargetHtml) [], taskTitle: string, userCode: { html: string, css: string }): void => {
    const taskObj: IFLSCssTaskSolutions = {
        title: taskTitle,
        userCode, taskSolutions
    }

    // save solution into local storage
    if (localStorage.getItem("cssTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSCssTaskSolutions[] = JSON.parse(localStorage.getItem("cssTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: IFLSCssTaskSolutions[] = []

        //prevention of duplicates
        localStorageData.forEach(el => {
            if (el.title !== taskTitle) {
                updatedLocalStorageData.push(el)
            }
        })

        // add new data into local storage
        updatedLocalStorageData.push(taskObj)
        localStorage.setItem("cssTasksSolutions", JSON.stringify(updatedLocalStorageData))
    } else {
        let localStorageData: IFLSCssTaskSolutions[] = []
        localStorageData.push(taskObj)
        localStorage.setItem("cssTasksSolutions", JSON.stringify(localStorageData));
    }
}

export const saveJsTaskSolutionToLS = (taskSolutions: IFJsTaskTargets[], taskTitle: string, userCode: string): void => {
    const taskObj: IFLSjsTaskSolutions = {
        title: taskTitle,
        userCode, taskSolutions
    }
    // save solution into local storage
    if (localStorage.getItem("jsTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSjsTaskSolutions[] = JSON.parse(localStorage.getItem("jsTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: IFLSjsTaskSolutions[] = []

        //prevention of duplicates
        localStorageData.forEach(el => {
            if (el.title !== taskTitle) {
                updatedLocalStorageData.push(el)
            }
        })

        // add new data into local storage
        updatedLocalStorageData.push(taskObj)
        localStorage.setItem("jsTasksSolutions", JSON.stringify(updatedLocalStorageData))
    } else {
        let localStorageData: IFLSjsTaskSolutions[] = []
        localStorageData.push(taskObj)
        localStorage.setItem("jsTasksSolutions", JSON.stringify(localStorageData));
    }
}

/**
 * Get html task targets - information about which task is completed (checkboxes)
 * @param saveDataCallback - function that saves data
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getHtmlTaskTargetsFromLS = (saveDataCallback: (obj: IFTaskTargets[]) => void, taskTitle: string, defaultValue: IFTaskTargets[]) => {
    if (localStorage.getItem("htmlTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        const taskTargets = localStorageData.filter(el => el.title === taskTitle)
        taskTargets.length !== 0 ? saveDataCallback(taskTargets[0].taskSolutions) : saveDataCallback(defaultValue)
    } else {
        saveDataCallback(defaultValue)
    }
}

/**
 * Get css task targets - information about which task is completed (checkboxes)
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getCssTaskTargetsFromLS = (
                                        taskTitle: string,
                                        defaultValue: (IFCssTaskTargetCss | IfCssTaskTargetHtml) []) => {
    if (localStorage.getItem("cssTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: IFLSCssTaskSolutions[] = JSON.parse(localStorage.getItem("cssTasksSolutions"));
        const taskTargets = localStorageData.filter(el => el.title === taskTitle)
        if(taskTargets.length !== 0) {
            return taskTargets[0].taskSolutions
        }
        else{
            return defaultValue
        }
    } else {
        return defaultValue
    }
}

/**
 * Get js task targets - information about which task is completed (checkboxes)
 * @param saveDataCallback - function that saves data
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getJsTaskTargetsFromLS = (
    taskTitle: string,
    defaultValue: IFJsTaskTargets []) => {
    if (localStorage.getItem("jsTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: IFLSjsTaskSolutions[] = JSON.parse(localStorage.getItem("jsTasksSolutions"));
        const taskTargets = localStorageData.filter(el => el.title === taskTitle)
        if(taskTargets.length > 0) {
            return taskTargets[0].taskSolutions
        }
        else{
            return defaultValue
        }
    } else {
        return defaultValue
    }
}


/**
 * Get user's html task solution code
 * @param saveDataCallback - function that saves data
 * @param.taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getHtmlTaskCodeFromLS = (saveDataCallback: (obj: string) => void, taskTitle: string, defaultValue: string) => {
    if (localStorage.getItem("htmlTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        const taskSolutionCode = localStorageData.filter(el => el.title === taskTitle)
        if (taskSolutionCode.length !== 0) {
            saveDataCallback(beautifyHtml(taskSolutionCode[0].code, {
                indent_size: 1,
                space_in_empty_paren: false,
                wrap_line_length: 50
            }))
        } else {
            saveDataCallback(beautifyHtml(defaultValue, {
                indent_size: 1,
                space_in_empty_paren: false,
                wrap_line_length: 50
            }))
        }
    }
}

/**
 * Get user's html task solution code
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getCssTaskCodeFromLS = (taskTitle: string, defaultValue: { html: string, css: string }) => {
    if (localStorage.getItem("cssTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: IFLSCssTaskSolutions[] = JSON.parse(localStorage.getItem("cssTasksSolutions"));
        const taskSolution = localStorageData.filter(el => el.title === taskTitle)
        if (taskSolution.length !== 0) {
            const taskCode: { html: string, css: string } = {
                html: beautifyHtml(taskSolution[0].userCode.html, {
                    indent_size: 1,
                    space_in_empty_paren: false,
                    wrap_line_length: 50
                }),
                css: beautifyCss(taskSolution[0].userCode.css, {
                    indent_size: 1,
                    space_in_empty_paren: false,
                    wrap_line_length: 50
                }),
            }
            return taskCode
        } else {
            const taskCode: { html: string, css: string } = {
                html: beautifyHtml(defaultValue.html, {
                    indent_size: 1,
                    space_in_empty_paren: false,
                    wrap_line_length: 50
                }),
                css: beautifyCss(defaultValue.css, {
                    indent_size: 1,
                    space_in_empty_paren: false,
                    wrap_line_length: 50
                })
            }
            return taskCode
        }
    }
}

/**
 * Get user's html task solution code
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getJsTaskCodeFromLS = (taskTitle: string, defaultValue: string) => {

    if (localStorage.getItem("jsTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: IFLSjsTaskSolutions[] = JSON.parse(localStorage.getItem("jsTasksSolutions"));

        const taskSolutionCode = localStorageData.filter(el => el.title === taskTitle);

        if (taskSolutionCode.length !== 0) {
            return beautifyJs(taskSolutionCode[0].userCode, {
                indent_size: 1,
                space_in_empty_paren: false,
                wrap_line_length: 50
            });
        } else {
            return beautifyHtml(defaultValue, {
                indent_size: 1,
                space_in_empty_paren: false,
                wrap_line_length: 50
            });
        }
    }
};

/**
 * save solved task title to ls, so that the user knows which tasks he has completed
 * @param taskTitle - task title
 * @param item - local storage name in which you want to save
 */
export const saveSolvedTaskToLS =
    (taskTitle: string, item: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks"): void => {
        if (localStorage.getItem(item) != null) {
            // @ts-ignore
            let localStorageData: string[] = JSON.parse(localStorage.getItem(item));
            localStorageData.push(taskTitle);
            //  array with updated local storage data
            let updatedLocalStorageData: string[] = []
            //prevention of duplicates
            localStorageData.forEach(el => {
                if (el !== taskTitle) {
                    updatedLocalStorageData.push(el)
                }
            })
            updatedLocalStorageData.push(taskTitle)
            localStorage.setItem(item, JSON.stringify(updatedLocalStorageData))
        } else {
            let localStorageData: string[] = [];
            localStorageData.push(taskTitle);
            localStorage.setItem(item, JSON.stringify(localStorageData))
        }
    }

export const checkSolvedTask = (taskTitle: string, item: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks"): boolean => {
    if (localStorage.getItem(item) != null) {
        // @ts-ignore
        let localStorageData: string[] = JSON.parse(localStorage.getItem(item));
        return localStorageData.includes(taskTitle)
    } else {
        return false
    }
}
import {
    IFCssTaskTargetCss,
    IfCssTaskTargetHtml, IFEditorCode, IFJsTaskTargets,
    IFLSCssTaskSolutions, IFLSjsTaskSolutions,
    TypeHtmlTaskSolution,
    TypeLSHtmlTaskSolutions
} from "../types/types";
import {IFTaskTargets} from "../types/types";
import {codeEditorAreas} from "../properties/codeEditorAreas";
import {formatCode} from "./formatCode";

const width = window.innerWidth;

// get font size which depends on the window width
const defaultFontSize = (): number => {
    if (width > 1440) {
        return 19;
    } else if (width <= 375) {
        return 10
    } else if (width <= 425) {
        return 12
    } else if (width <= 768) {
        return 14;
    } else if (width <= 1024) {
        return 11;
    } else if (width <= 1280) {
        return 13
    } else if (width <= 1440) {
        return 14;
    } else if (width <= 1600) {
        return 16;
    } else {
        return 16;
    }
}


// get editor font size from local storage
export const getEditorFSize = (): number => {
    const fontSize = localStorage.getItem("editorFontSize");
    if (fontSize !== null) {
        return parseFloat(fontSize);
    } else {
        return defaultFontSize();
    }
};


// get editor theme from local storage, it not exist return default theme - monokai
export const getEditorTheme = (): string => {
    const theme = localStorage.getItem("editorTheme");
    if (theme !== null) {
        return theme;
    }
    return "monokai";
}

/**
 * Save task solution into localStorage, so that when the user returns to this task, he will have his solution
 * @param taskSolutions - taskSolutions that you want to save in local storage,
 * is needed, it has keys (false or true) that display the single task target has been completed (checkboxes)
 * @param taskTitle - task name for solutions, is needed after to download specific solutions for task
 * @param userCode - code with solution, when user comes back he will have this code
 */
export const saveHtmlTaskSolutionToLS = (taskSolutions: TypeHtmlTaskSolution[], taskTitle: string, userCode: string): void => {

    const solvedTargets : number[] = [];

    taskSolutions.forEach(el => el.solved && solvedTargets.push(el.number));
    console.log(solvedTargets)
    // object with task name, solutions, code
    const taskObj: TypeLSHtmlTaskSolutions = {
        title: taskTitle,
        code: userCode, taskSolutions,
        solvedTargets: solvedTargets
    };

    // save solution into local storage
    if (localStorage.getItem("htmlTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: TypeLSHtmlTaskSolutions[] = [];

        //prevention of duplicates
        localStorageData.forEach(el => {
            if (el.title !== taskTitle) {
                updatedLocalStorageData.push(el);
            }
        })

        // add new data into local storage
        updatedLocalStorageData.push(taskObj);
        return localStorage.setItem("htmlTasksSolutions", JSON.stringify(updatedLocalStorageData));
    } else {

        // if cssTasksSolutions doesnt exist in local storage create new data
        let localStorageData: TypeLSHtmlTaskSolutions[] = [];
        localStorageData.push(taskObj);
        return localStorage.setItem("htmlTasksSolutions", JSON.stringify(localStorageData));
    }
};

/**
 * Save task solution into localStorage, so that when the user returns to this task, he will have his solution
 * @param taskSolutions - taskSolutions that you want to save in local storage,
 * is needed, it has keys (false or true) that display the single task target has been completed (checkboxes)
 * @param taskTitle - task name for solutions, is needed after to download specific solutions for task
 * @param userCode - code with solution, when user comes back he will have this code
 */
export const saveCssTaskSolutionToLS = (taskSolutions: (IFCssTaskTargetCss | IfCssTaskTargetHtml) [], taskTitle: string, userCode: { html: string, css: string }): void => {

    // object with task name, solutions, code
    const taskObj: IFLSCssTaskSolutions = {
        title: taskTitle,
        userCode, taskSolutions
    };

    // save solution into local storage
    if (localStorage.getItem("cssTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSCssTaskSolutions[] = JSON.parse(localStorage.getItem("cssTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: IFLSCssTaskSolutions[] = [];

        //prevention of duplicates
        localStorageData.forEach(el => {
            if (el.title !== taskTitle) {
                updatedLocalStorageData.push(el);
            }
        })

        // add new data into local storage
        updatedLocalStorageData.push(taskObj);
        return localStorage.setItem("cssTasksSolutions", JSON.stringify(updatedLocalStorageData));
    } else {

        // if cssTasksSolutions doesnt exist in local storage create new data
        let localStorageData: IFLSCssTaskSolutions[] = [];
        localStorageData.push(taskObj);
        return localStorage.setItem("cssTasksSolutions", JSON.stringify(localStorageData));
    }
};

/**
 * Save task solution into localStorage, so that when the user returns to this task, he will have his solution
 * @param taskSolutions - taskSolutions that you want to save in local storage,
 * is needed, it has keys (false or true) that display the single task target has been completed (checkboxes)
 * @param taskTitle - task name for solutions, is needed after to download specific solutions for task
 * @param userCode - code with solution, when user comes back he will have this code
 */
export const saveJsTaskSolutionToLS = (taskSolutions: IFJsTaskTargets[], taskTitle: string, userCode: string): void => {

    // object with task name, solutions, code
    const taskObj: IFLSjsTaskSolutions = {
        title: taskTitle,
        userCode, taskSolutions
    };

    // save solution into local storage
    if (localStorage.getItem("jsTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSjsTaskSolutions[] = JSON.parse(localStorage.getItem("jsTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: IFLSjsTaskSolutions[] = [];

        //prevention of duplicates
        localStorageData.forEach(el => {
            if (el.title !== taskTitle) {
                updatedLocalStorageData.push(el);
            }
        })

        // add new data into local storage
        updatedLocalStorageData.push(taskObj);
        return localStorage.setItem("jsTasksSolutions", JSON.stringify(updatedLocalStorageData));
    } else {

        // if cssTasksSolutions doesnt exist in local storage create new data
        let localStorageData: IFLSjsTaskSolutions[] = [];
        localStorageData.push(taskObj);
        return localStorage.setItem("jsTasksSolutions", JSON.stringify(localStorageData));
    }
}

/**
 * Get html task targets - information about which task is completed (color in checkbox will be red or green)
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getHtmlTaskTargetsFromLS = (taskTitle: string, defaultValue: IFTaskTargets[]) => {
    if (localStorage.getItem("htmlTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        // check if the task has been saved
        let data = localStorageData.filter(el => el.title === taskTitle);

        // array with task targets
        const targetsData : IFTaskTargets[] = defaultValue;

        // Numbers of targets that have been executed are stored in local storage.
        // If there is a number then set the solved key  to true in specific element in targetsData array
        // This will make the checkbox color will be green, and user will be know what left
         data[0].solvedTargets.forEach(el => {
            const solved = defaultValue.find(e => e.number === el);
             if(solved !== undefined){
                 const index = defaultValue.indexOf(solved);
                 return targetsData[index].solved = true;
             }
         });

        if (data.length !== 0) {
            return targetsData;
        } else {
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}

/**
 * Get css task targets - information about which task is completed  (color in checkbox will be red or green)
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getCssTaskTargetsFromLS = (
    taskTitle: string,
    defaultValue: (IFCssTaskTargetCss | IfCssTaskTargetHtml) []) => {
    if (localStorage.getItem("cssTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: IFLSCssTaskSolutions[] = JSON.parse(localStorage.getItem("cssTasksSolutions"));

        // check if the task has been saved
        const taskTargets = localStorageData.filter(el => el.title === taskTitle);
        if (taskTargets.length !== 0) {
            return taskTargets[0].taskSolutions;
        } else {
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}

/**
 * Get js task targets - information about which task is completed  (color in checkbox will be red or green)
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getJsTaskTargetsFromLS = (taskTitle: string, defaultValue: IFJsTaskTargets []) => {
    if (localStorage.getItem("jsTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSjsTaskSolutions[] = JSON.parse(localStorage.getItem("jsTasksSolutions"));

        // check if the task has been saved
        const taskTargets = localStorageData.filter(el => el.title === taskTitle);
        if (taskTargets.length > 0) {
            return taskTargets[0].taskSolutions;
        } else {
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}


/**
 * Get user's html task solution code
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getHtmlTaskCodeFromLS = (taskTitle: string, defaultValue: string) => {
    if (localStorage.getItem("htmlTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        const taskSolutionCode = localStorageData.filter(el => el.title === taskTitle);
        if (taskSolutionCode.length !== 0) {
            return formatCode("html", taskSolutionCode[0].code);
        } else {
            return formatCode("html", defaultValue);
        }
    } else {
        return formatCode("html", defaultValue);
    }
}

/**
 * Get user's html task solution code
 * @param taskTitle - name of task
 * @param defaultValue - the default value to be saved to the state if the user has not solved this task
 */
export const getCssTaskCodeFromLS = (taskTitle: string, defaultValue: { html: string, css: string }) => {

    // formatted default code that will be returned if this job is not saved in local storage
    const defaultCode: { html: string, css: string } = {
        html: formatCode("html", defaultValue.html),
        css: formatCode("css", defaultValue.css)
    };

    if (localStorage.getItem("cssTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSCssTaskSolutions[] = JSON.parse(localStorage.getItem("cssTasksSolutions"));
        const taskSolution = localStorageData.filter(el => el.title === taskTitle)
        if (taskSolution.length !== 0) {
            const taskCode: { html: string, css: string } = {
                html: formatCode("html", taskSolution[0].userCode.html),
                css: formatCode("css", taskSolution[0].userCode.css)
            };
            return taskCode;
        } else {
            return defaultCode;
        }
    } else {
        return defaultCode;
    }
};

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
            return formatCode("js", taskSolutionCode[0].userCode)
        } else {
            return defaultValue
        }
    } else {
        return defaultValue
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
            let updatedLocalStorageData: string[] = [];
            //prevention of duplicates
            localStorageData.forEach(el => {
                if (el !== taskTitle) {
                    updatedLocalStorageData.push(el);
                }
            })
            updatedLocalStorageData.push(taskTitle);
            localStorage.setItem(item, JSON.stringify(updatedLocalStorageData));
        } else {
            // if item that you want to save doesn't exist, create new data
            let localStorageData: string[] = [];
            localStorageData.push(taskTitle);
            localStorage.setItem(item, JSON.stringify(localStorageData));
        }
}

/**
 * remove solved task from local storage
 * @param taskTitle - task title
 * @param item - local storage name in which you want to save
 */
export const removeSolvedTaskFormLS = (taskTitle: string, item: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks") => {
    // @ts-ignore
    let localStorageData: string[] = JSON.parse(localStorage.getItem(item));
    if(localStorageData != null){

        const index = localStorageData.indexOf(taskTitle);
        if (index > -1) {
            localStorageData.splice(index, 1);
        }
        localStorage.setItem(item, JSON.stringify(localStorageData));
    }
}
/**
 * check if the task has been solved correctly
 * @param taskTitle
 * @param item
 */
export const checkSolvedTask = (taskTitle: string, item: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks"): boolean => {
    if (localStorage.getItem(item) != null) {
        // @ts-ignore
        let localStorageData: string[] = JSON.parse(localStorage.getItem(item));
        return localStorageData.includes(taskTitle);
    } else {
        return false;
    }
}

/**
 * Save user code to local storage so that when he comes back he has his code from the previous session
 * @param code - code that you want to save
 */
export const saveEditorCodeToLS = (code: IFEditorCode): void => localStorage.setItem("EditorCode", JSON.stringify(code));

// get code for sandbox editor from last session
export const getEditorCodeFromLS = (defaultValue: IFEditorCode): IFEditorCode => {
    const localStorageData = localStorage.getItem("EditorCode");
    if (localStorageData != null) {
        return JSON.parse(localStorageData)
    } else {
        return defaultValue
    }
}

// get editor areas from local storage
export const getEditorAreas = (): string => {
    const localStorageData = localStorage.getItem("editorAreas");
    if (localStorageData != null) {
        return localStorageData
    } else {
        return codeEditorAreas[0]
    }
}

/**
 * save gained quiz coins into local storage
 * @param coins - amount of coins that you want to save
 * @param item - name where you want to save data
 */
export const saveQuizCoinsToLS = (coins: number, item: string): void => {
    const localStorageData = localStorage.getItem("quizCoins")
    if (localStorageData != null) {
        let oldLocalStorageData = JSON.parse(localStorageData)
        oldLocalStorageData[item] = oldLocalStorageData[item] + coins
        return localStorage.setItem("quizCoins", JSON.stringify(oldLocalStorageData))
    } else {
        const quizCoins = {
            html: 0,
            css: 0,
            js: 0,
            [item]: coins
        }
        return localStorage.setItem("quizCoins", JSON.stringify(quizCoins))
    }
}

/**
 * get quiz coins
 * @param item - name of local storage from where data will be retrieved
 */
export const getQuizCoins = (item: string): number => {
    const localStorageData = localStorage.getItem("quizCoins");
    if (localStorageData != null) {
        const quizCoins = JSON.parse(localStorageData);
        return quizCoins[item];
    } else {
        return 0;
    }
};
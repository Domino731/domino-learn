import {
    IFCssTaskTargetCss,
    IfCssTaskTargetHtml, IFEditorCode, IFJsTaskTargets,
    IFLSCssTaskSolutions, IFLSjsTaskSolutions,
    TypeHtmlTaskSolution,
    TypeLSHtmlTaskSolutions
} from "../types/types";
import { IFTaskTargets } from "../types/types";
import { codeEditorAreas } from "../properties/codeEditorAreas";
import { formatCode } from "./formatCode";

const width = window.innerWidth;

/**  get font size which is depends on the window width */
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
 * Save html task solution into localStorage, so that when the user returns to this task, he will be have his solution
 * @param taskTargets - executed task targets
 * @param taskTitle - task title, needed to search this data basis on this title
 * @param userCode - code with solution, when user comes back he will have this code
 */
export const saveHtmlTaskSolutionToLS = (taskTargets: IFTaskTargets[], taskTitle: string, userCode: string): void => {

    // array with solved targets
    const solvedTargets: number[] = [];
    taskTargets.forEach(el => el.solved && solvedTargets.push(el.number));

    // data about task which will be saved in local storage
    const taskObj: TypeLSHtmlTaskSolutions = {
        title: taskTitle,
        code: userCode,
        solvedTargets
    };

    // check if storage exists
    if (localStorage.getItem("htmlTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: TypeLSHtmlTaskSolutions[] = [];

        // prevention of duplicates
        localStorageData.forEach(el => {
            if (el.title !== taskTitle) {
                updatedLocalStorageData.push(el);
            }
        })

        // add new data into local storage
        updatedLocalStorageData.push(taskObj);
        return localStorage.setItem("htmlTasksSolutions", JSON.stringify(updatedLocalStorageData));
    } else {
        // if htmlTasksSolutions doesnt exist in local storage then create new storage
        let localStorageData: TypeLSHtmlTaskSolutions[] = [];
        localStorageData.push(taskObj);
        return localStorage.setItem("htmlTasksSolutions", JSON.stringify(localStorageData));
    }
};

/**
 * Save css task solution into localStorage, so that when the user returns to this task, he will be have his solution
 * @param taskTargets - executed task targets
 * @param taskTitle - task title, needed to search this data basis on this title
 * @param userCode - code with solution, when user comes back he will have this code
 */
export const saveCssTaskSolutionToLS = (taskTargets: (IFCssTaskTargetCss | IfCssTaskTargetHtml)[], taskTitle: string, userCode: { html: string, css: string }): void => {

    // array with solved targets
    const solvedTargets: number[] = [];
    taskTargets.forEach(el => el.solved && solvedTargets.push(el.number));

    // object with task name, solutions, code
    const taskObj: IFLSCssTaskSolutions = {
        title: taskTitle,
        userCode,
        solvedTargets
    };

    // check if storage exists
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

        // push new data into local storage
        updatedLocalStorageData.push(taskObj);
        return localStorage.setItem("cssTasksSolutions", JSON.stringify(updatedLocalStorageData));
    } else {

        // if cssTasksSolutions doesnt exist in local storage then create new storage
        let localStorageData: IFLSCssTaskSolutions[] = [];
        localStorageData.push(taskObj);
        return localStorage.setItem("cssTasksSolutions", JSON.stringify(localStorageData));
    }
};

/**
 * Save css task solution into localStorage, so that when the user returns to this task, he will be have his solution
 * @param taskTargets - executed task targets
 * @param taskTitle - task title, needed to search this data basis on this title
 * @param userCode - code with solution, when user comes back he will have this code
 */
export const saveJsTaskSolutionToLS = (taskTargets: IFJsTaskTargets[], taskTitle: string, userCode: string): void => {

    // array with solved targets
    const solvedTargets: number[] = [];
    taskTargets.forEach(el => el.solved && solvedTargets.push(el.number));

    // object with task name, solutions, code
    const taskObj: IFLSjsTaskSolutions = {
        title: taskTitle,
        userCode,
        solvedTargets
    };

    // check if storage exists
    if (localStorage.getItem("jsTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSjsTaskSolutions[] = JSON.parse(localStorage.getItem("jsTasksSolutions"));

        //  array with updated local storage data
        let updatedLocalStorageData: IFLSjsTaskSolutions[] = [];

        // prevention of duplicates
        localStorageData.forEach(el => {
            if (el.title !== taskTitle) {
                updatedLocalStorageData.push(el);
            }
        })

        // add new data into local storage
        updatedLocalStorageData.push(taskObj);
        return localStorage.setItem("jsTasksSolutions", JSON.stringify(updatedLocalStorageData));
    } else {

        // if cssTasksSolutions doesnt exist in local storage then create storage
        let localStorageData: IFLSjsTaskSolutions[] = [];
        localStorageData.push(taskObj);
        return localStorage.setItem("jsTasksSolutions", JSON.stringify(localStorageData));
    }
}

/**
 * Get html task targets - information about which task target is completed
 * @param taskTitle - title of task
 * @param defaultValue - the default value to be return if the user has not solved this task yet
 */
export const getHtmlTaskTargetsFromLS = (taskTitle: string, defaultValue: IFTaskTargets[]): IFTaskTargets[] => {
    // check if storage exists
    if (localStorage.getItem("htmlTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        // check if the task has been saved
        let data: TypeLSHtmlTaskSolutions[] = localStorageData.filter(el => el.title === taskTitle);

        // array with task targets
        const targetsData: IFTaskTargets[] = defaultValue;

        // Numbers of targets that have been executed are stored in local storage.
        // so check what targets were executed by user
        if (data.length !== 0) {
            // using forEach find these targets
            data[0].solvedTargets.forEach(el => {
                const solved = defaultValue.find(e => e.number === el);

                if (solved !== undefined) {
                    const index = defaultValue.indexOf(solved);
                    return targetsData[index].solved = true;
                }
            });
            return targetsData;
        }
        else {
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}

/**
 * Get css task targets - information about which task target is completed
 * @param taskTitle - title of task
 * @param defaultValue - the default value to be return if the user has not solved this task yet
 */
export const getCssTaskTargetsFromLS = (
    taskTitle: string,
    defaultValue: (IFCssTaskTargetCss | IfCssTaskTargetHtml)[])
    : (IFCssTaskTargetCss | IfCssTaskTargetHtml)[] => {

    // check if storage exists
    if (localStorage.getItem("cssTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: IFLSCssTaskSolutions[] = JSON.parse(localStorage.getItem("cssTasksSolutions"));

        // check if the task has been saved
        const taskTargets: IFLSCssTaskSolutions[] = localStorageData.filter(el => el.title === taskTitle);

        // check if the task has been saved
        let data: IFLSCssTaskSolutions[] = localStorageData.filter(el => el.title === taskTitle);

        // array with task targets
        const targetsData: (IFCssTaskTargetCss | IfCssTaskTargetHtml)[] = defaultValue;

        // Numbers of targets that have been executed are stored in local storage.
        // so check what targets were executed by user
        if (taskTargets.length !== 0) {

            // using forEach find these targets
            data[0].solvedTargets.forEach(el => {
                const solved = defaultValue.find(e => e.number === el);
                if (solved !== undefined) {
                    const index = defaultValue.indexOf(solved);
                    return targetsData[index].solved = true;
                }
            });

            return targetsData;
        } else {
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}

/**
 * Get js task targets - information about which task target is completed
 * @param taskTitle - title of task
 * @param defaultValue - the default value to be return if the user has not solved this task yet
 */
export const getJsTaskTargetsFromLS = (taskTitle: string, defaultValue: IFJsTaskTargets[]): IFJsTaskTargets[] => {


    // check if storage exists
    if (localStorage.getItem("jsTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSjsTaskSolutions[] = JSON.parse(localStorage.getItem("jsTasksSolutions"));

        // check if the task has been saved
        const taskTargets: IFLSjsTaskSolutions[] = localStorageData.filter(el => el.title === taskTitle);

        // check if the task has been saved
        let data: IFLSjsTaskSolutions[] = localStorageData.filter(el => el.title === taskTitle);

        // array with task targets
        const targetsData: IFJsTaskTargets[] = defaultValue;

        // Numbers of targets that have been executed are stored in local storage.
        // so check what targets were executed by user
        if (taskTargets.length > 0) {

            // using forEach find these targets
            data[0].solvedTargets.forEach(el => {
                const solved = defaultValue.find(e => e.number === el);
                if (solved !== undefined) {
                    const index = defaultValue.indexOf(solved);
                    return targetsData[index].solved = true;
                }
            });

            return targetsData;
        } else {
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}


/**
 * Get user's html task code for particular task from last session
 * @param taskTitle - title of task
 * @param defaultValue - the default value to be return if the user has not solved this task
 */
export const getHtmlTaskCodeFromLS = (taskTitle: string, defaultValue: string) => {
    if (localStorage.getItem("htmlTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: TypeLSHtmlTaskSolutions[] = JSON.parse(localStorage.getItem("htmlTasksSolutions"));

        // find this code
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
 * Get user's css task code for particular task from last session
 * @param taskTitle - title of task
 * @param defaultValue - the default value to be return if the user has not solved this task
 */
export const getCssTaskCodeFromLS = (taskTitle: string, defaultValue: { html: string, css: string }) => {

    // formatted default code that will be returned if the task is not saved in local storage yet
    const defaultCode: { html: string, css: string } = {
        html: formatCode("html", defaultValue.html),
        css: formatCode("css", defaultValue.css)
    };

    // find this code
    if (localStorage.getItem("cssTasksSolutions") != null) {
        // @ts-ignore
        let localStorageData: IFLSCssTaskSolutions[] = JSON.parse(localStorage.getItem("cssTasksSolutions"));

        // the particular task data
        const taskSolution = localStorageData.filter(el => el.title === taskTitle);
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
 * Get user's html task code for particular task from last session
 * @param taskTitle - title of task
 * @param defaultValue - the default value to be return if the user has not solved this task
 */
export const getJsTaskCodeFromLS = (taskTitle: string, defaultValue: string) => {
    if (localStorage.getItem("jsTasksSolutions") != null) {

        // @ts-ignore
        let localStorageData: IFLSjsTaskSolutions[] = JSON.parse(localStorage.getItem("jsTasksSolutions"));

        // find this code
        const taskSolutionCode = localStorageData.filter(el => el.title === taskTitle);
        if (taskSolutionCode.length !== 0) {
            return formatCode("js", taskSolutionCode[0].userCode);
        } else {
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
};

/**
 * save solved task title to ls, so that the user will be know which task has been completed
 * @param taskTitle - task title
 * @param taskType - local storage name in which you want to save
 */
export const saveSolvedTaskToLS = (taskTitle: string, taskType: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks"): void => {
    // check if storage exists
    if (localStorage.getItem(taskType) != null) {
        // @ts-ignore
        let localStorageData: string[] = JSON.parse(localStorage.getItem(taskType));
        // add new task to solved
        localStorageData.push(taskTitle);

        //  array with updated local storage data
        let updatedLocalStorageData: string[] = [];

        //prevention of duplicates
        localStorageData.forEach(el => {
            if (el !== taskTitle) {
                updatedLocalStorageData.push(el);
            }
        });

        // push new task title
        updatedLocalStorageData.push(taskTitle);

        // set updated array with task titles
        localStorage.setItem(taskType, JSON.stringify(updatedLocalStorageData));
    }
    // if storage doesnt exists then create new
    else {
        let localStorageData: string[] = [];
        localStorageData.push(taskTitle);
        localStorage.setItem(taskType, JSON.stringify(localStorageData));
    }
}

/**
 * remove solved task title from local storage
 * @param taskTitle - task title
 * @param taskType - local storage name from which you want remove a task
 */
export const removeSolvedTaskFormLS = (taskTitle: string, taskType: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks") => {
    // @ts-ignore
    let localStorageData: string[] = JSON.parse(localStorage.getItem(taskType));

    // check if storage exists
    if (localStorageData != null) {

        // remove this task from solved
        const index = localStorageData.indexOf(taskTitle);
        if (index > -1) {
            localStorageData.splice(index, 1);
        }
        localStorage.setItem(taskType, JSON.stringify(localStorageData));
    }
}
/**
 * check if the task has been completed
 * @param taskTitle - task title
 * @param taskType - name of local storage item in which you want to check if tasks has been completed
 */
export const checkSolvedTask = (taskTitle: string, taskType: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks"): boolean => {
    if (localStorage.getItem(taskType) != null) {
        // @ts-ignore
        let localStorageData: string[] = JSON.parse(localStorage.getItem(taskType));
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

/**
 * get code for sandbox editor from last session
 * @param defaultValue - the default data that will be returned if local storage data doesnt exists
 * @returns 
 */
export const getEditorCodeFromLS = (defaultValue: IFEditorCode): IFEditorCode => {
    const localStorageData = localStorage.getItem("EditorCode");
    if (localStorageData != null) {
        return JSON.parse(localStorageData);
    } else {
        return defaultValue;
    }
}

/**
 * get grid areas for editor from local storage 
 */
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
 * @param item - local storage place where you want to save data
 */
export const saveQuizCoinsToLS = (coins: number, item: string): void => {
    const localStorageData = localStorage.getItem("quizCoins");

    // check if storage exists
    if (localStorageData != null) {
        // add new coins to current
        let oldLocalStorageData = JSON.parse(localStorageData);
        oldLocalStorageData[item] = oldLocalStorageData[item] + coins;
        return localStorage.setItem("quizCoins", JSON.stringify(oldLocalStorageData));
    }
    // if storage doeant exists then create new
    else {
        const quizCoins = {
            html: 0,
            css: 0,
            js: 0,
            [item]: coins
        }
        return localStorage.setItem("quizCoins", JSON.stringify(quizCoins));
    }
}

/**
 * get quiz coins for particular quiz type
 * @param quizType - name of local storage from where data will be retrieved
 */
export const getQuizCoins = (quizType: string): number => {
    const localStorageData = localStorage.getItem("quizCoins");
    if (localStorageData != null) {
        const quizCoins = JSON.parse(localStorageData);
        return quizCoins[quizType];
    } else {
        return 0;
    }
};
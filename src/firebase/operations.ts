import {db} from "./firebaseIndex";
import {IFAllTasks, IFHtmlTask, IFCssTask, IFJsTask} from "../types/types";
import {
    checkSolvedTask,
    getCssTaskCodeFromLS, getCssTaskTargetsFromLS, getHtmlTaskCodeFromLS, getHtmlTaskTargetsFromLS,
    getJsTaskCodeFromLS,
    getJsTaskTargetsFromLS
} from "../functions/localStorage";

const beautifyHtml = require('js-beautify').html
const beautifyCss = require('js-beautify').css
const beautifyJs = require('js-beautify').js;
/**
 * fetch  specific html task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificHtmlTask = (taskNumber: number, saveDataCallback: (data: IFHtmlTask) => void) => {
    db.collection("htmlTasks").where("number", "==", taskNumber)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data : IFHtmlTask = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    number: doc.data().number,
                    aid: doc.data().aid,
                    originalCode: beautifyHtml(doc.data().code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}),
                    // check if the user hasn't already solved the task, if he  has solved it,
                    // get it from local storage and if not, return the default value (task.targets)
                    code: getHtmlTaskCodeFromLS(doc.data().title, doc.data().taskCode),
                    targets: getHtmlTaskTargetsFromLS(doc.data().title, doc.data().targets),
                }
                return saveDataCallback(data)
            });
        })
}

/**
 * fetch specific css task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificCssTask = (taskNumber: number, saveDataCallback: (data: IFCssTask) => void) => {
    db.collection("cssTasks").where("number", "==", taskNumber)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data : IFCssTask = {
                   title: doc.data().title,
                   number: doc.data().number,
                   introduction: doc.data().introduction,
                   aid: doc.data().aid,
                    // check if the user hasn't already solved the task, if he  has solved it,
                    // get it from local storage and if not, return the default value (task.targets)
                    // @ts-ignore
                   code: getCssTaskCodeFromLS(doc.data().title, doc.data().code),
                   targets: getCssTaskTargetsFromLS(doc.data().title, doc.data().targets),
                   originalCode: {
                       html: beautifyHtml(doc.data().code.html, {
                           indent_size: 1,
                           space_in_empty_paren: false,
                           wrap_line_length: 50
                       }),
                       css: beautifyCss(doc.data().code.css, {
                           indent_size: 1,
                           space_in_empty_paren: false,
                           wrap_line_length: 50
                       }),
                   }
                }
                return saveDataCallback(data)
            });
        })
}

/**
 * fetch specific css task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificJsTask = (taskNumber: number, saveDataCallback: (data: IFJsTask) => void) => {
    db.collection("jsTasks").where("number", "==", taskNumber)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data: IFJsTask = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    number: doc.data().number,
                    aid: doc.data().aid,
                    originalCode:  beautifyJs(doc.data().code,{
                        indent_size: 1,
                        space_in_empty_paren: false,
                        wrap_line_length: 50
                    }),
                    // check if the user hasn't already solved the task, if he  has solved it,
                    // get it from local storage and if not, return the default value (task.targets)
                    code:  getJsTaskCodeFromLS(doc.data().title, doc.data().code),
                    targets: getJsTaskTargetsFromLS(doc.data().title, doc.data().targets),
                }
                return saveDataCallback(data)
            });

        })
}

/**
 * fetch all tasks
 * @param tasks  - tasks that you want to get - css, html, js
 * @param saveDataCallback - function that saved incoming data to component state
 * @param checkItem - the name used to retrieve data from localStorage by the function that
 * checks whether the user has already solved the task
 */
export const getAllTasks = (tasks: "htmlTasks" | "jsTasks" | "cssTasks",
                            checkItem: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks",
                            saveDataCallback: (data: IFAllTasks[]) => void) => {
    db.collection(tasks)
        .onSnapshot(querySnapshot => {
            let tasks: IFAllTasks[] = []
            querySnapshot.docs.map(doc => {
                const data: IFAllTasks = {
                    title: doc.data().title,
                    number: doc.data().number,
                    solved: checkSolvedTask(doc.data().title, checkItem)
                }
                tasks.push(data)
            });

            return saveDataCallback(tasks)
        })
}
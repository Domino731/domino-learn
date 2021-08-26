import {db} from "./firebaseIndex";
import {IFAllTasks, IFHtmlTask, IFCssTask, IFJsTask, IFQuizQuestion} from "../types/types";
import {
    checkSolvedTask,
    getCssTaskCodeFromLS, getCssTaskTargetsFromLS, getHtmlTaskCodeFromLS, getHtmlTaskTargetsFromLS,
    getJsTaskCodeFromLS,
    getJsTaskTargetsFromLS
} from "../functions/localStorage";
import {formatCode} from "../functions/formatCode";

const beautifyJs = require('js-beautify').js;
/**
 * fetch  specific html task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificHtmlTask = (taskNumber: number, saveDataCallback: (data: (IFHtmlTask) | null) => void) => {

    // set loading screen
    saveDataCallback(null);

    // fetch task
    db.collection("htmlTasks").where("number", "==", taskNumber)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data: IFHtmlTask = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    number: doc.data().number,
                    aid: doc.data().aid,
                    originalCode: formatCode("html", doc.data().code),
                    // check if the user hasn't already solved the task, if he  has solved it,
                    // get it from local storage and if not, return the default value (task.targets)
                    code: getHtmlTaskCodeFromLS(doc.data().title, doc.data().code),
                    targets: getHtmlTaskTargetsFromLS(doc.data().title, doc.data().targets),
                }
                return saveDataCallback(data)
            });
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
};

/**
 * fetch specific css task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificCssTask = (taskNumber: number, saveDataCallback: (data: (IFCssTask | null)) => void) => {

    // set loading screen
    saveDataCallback(null)

    // fetch task
    db.collection("cssTasks").where("number", "==", taskNumber)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data: IFCssTask = {
                    title: doc.data().title,
                    number: doc.data().number,
                    introduction: doc.data().introduction,
                    aid: doc.data().aid,
                    includeHtml: doc.data().includeHtml,
                    originalCode: {
                        html: formatCode("html", doc.data().code.html),
                        css: formatCode("css", doc.data().code.css)
                    },
                    // check if the user hasn't already solved the task, if he  has solved it,
                    // get it from local storage and if not, return the default value (task.targets)
                    // @ts-ignore
                    code: getCssTaskCodeFromLS(doc.data().title, doc.data().code),
                    targets: getCssTaskTargetsFromLS(doc.data().title, doc.data().targets),
                }
                return saveDataCallback(data);
            });
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
};

/**
 * fetch specific css task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificJsTask = (taskNumber: number, saveDataCallback: (data: (IFJsTask | null)) => void) => {

    // set loading screen
    saveDataCallback(null)

    // fetch task
    db.collection("jsTasks").where("number", "==", taskNumber)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                // The beautify module does not support formatting javascript comments,
                // and they are important for checking the task, so you have to do it manually.
                // Any code in firestore will contain "@",
                // which gives you the ability to create comment formatting.
                const codeJs: string = beautifyJs(doc.data().code, {
                    indent_size: 1,
                    wrap_line_length: 2,
                })
                const formattedCode = codeJs.replaceAll('@', '')


                const data: IFJsTask = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    number: doc.data().number,
                    aid: doc.data().aid,
                    originalCode: formattedCode,
                    // check if the user hasn't already solved the task, if he  has solved it,
                    // get it from local storage and if not, return the default value (task.targets)
                    code: getJsTaskCodeFromLS(doc.data().title, formattedCode),
                    targets: getJsTaskTargetsFromLS(doc.data().title, doc.data().targets),
                }
                return saveDataCallback(data);
            });

        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
};

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
                return tasks.push(data);
            });
            return saveDataCallback(tasks);
        })
};


/**
 * fetch random quiz questions (max 10 questions)
 * @param type - type of quiz elements that you want to get - html, css or js
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getQuizQuestions = (type: string, saveDataCallback: (data: (IFQuizQuestion[] | null)) => void) => {

    // set loading screen
    saveDataCallback(null);
    db.collection("quiz").where("type", "==", type)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                // shuffle the questions
                const shuffledQuestions: IFQuizQuestion[] = doc.data().questions.sort(() => Math.random() - .5)
                saveDataCallback(shuffledQuestions.slice(0, 10));
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
};
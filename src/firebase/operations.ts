import { db } from "./firebaseIndex";
import { IFAllTasks, IFHtmlTask, IFCssTask, IFJsTask, IFQuizQuestion } from "../types/types";
import {
    checkSolvedTask,
    getCssTaskCodeFromLS, getCssTaskTargetsFromLS, getHtmlTaskCodeFromLS, getHtmlTaskTargetsFromLS,
    getJsTaskCodeFromLS,
    getJsTaskTargetsFromLS
} from "../functions/localStorage";
import { formatCode } from "../functions/formatCode";

/**
 * fetch  specific html task
 * @param taskNumber  - number of task
 * @param saveTaskDataCallback - function that will save data about task to component state
 * @param saveAllTasksDataCallback - function that will save data with all tasks to component state
 */
export const getSpecificHtmlTask = (taskNumber: number,
    saveTaskDataCallback: (data: (IFHtmlTask) | null | undefined) => void,
    saveAllTasksDataCallback: (data: IFAllTasks[]) => void
) => {

    // set loading screen
    saveTaskDataCallback(null);

    // fetch data about all html tasks 
    return db.collection('htmlTasks')
        .onSnapshot(querySnapshot => {
            let tasks: IFAllTasks[] = [];
            let specificTask: IFHtmlTask | null = null;
            querySnapshot.docs.map(doc => {
                // create general data for single tasks, and push this data into tasks array
                const data: IFAllTasks = {
                    title: doc.data().title,
                    number: doc.data().number,
                    solved: checkSolvedTask(doc.data().title, 'solvedHtmlTasks')
                }
                tasks.push(data);

                // find the particular one
                if (doc.data().number === taskNumber) {
                    specificTask = {
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
                }
            });

            // check if task exists
            if (specificTask) {
                saveTaskDataCallback(specificTask);
            }
            else {
                saveTaskDataCallback(undefined);
            }
            return saveAllTasksDataCallback(tasks.sort((a, b) => a.number - b.number));
        });
};

/**
 * fetch specific css task
 * @param taskNumber  - number of task
 * @param saveTaskDataCallback - function that will save data about task to component state
 * @param saveAllTasksDataCallback - function that will save data with all tasks to component state
 */
export const getSpecificCssTask = (taskNumber: number,
    saveTaskDataCallback: (data: (IFCssTask | null | undefined)) => void,
    saveAllTasksDataCallback: (data: IFAllTasks[]) => void
) => {
    // set loading screen
    saveTaskDataCallback(null)


    // fetch data about all html tasks 
    return db.collection('cssTasks')
        .onSnapshot(querySnapshot => {
            let tasks: IFAllTasks[] = [];
            let specificTask: IFCssTask | null = null;
            querySnapshot.docs.map(doc => {
                // create general data for single tasks, and push this data into tasks array
                const data: IFAllTasks = {
                    title: doc.data().title,
                    number: doc.data().number,
                    solved: checkSolvedTask(doc.data().title, "solvedCssTasks")
                }
                tasks.push(data);

                // find the particular one
                if (doc.data().number === taskNumber) {
                    specificTask = {
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
                }
            });

            // check if task exists
            if (specificTask) {
                saveTaskDataCallback(specificTask);
            }
            else {
                saveTaskDataCallback(undefined);
            }
            return saveAllTasksDataCallback(tasks.sort((a, b) => a.number - b.number));
        });
};

/**
 * fetch specific javascript task
 * @param taskNumber  - number of task
 * @param saveTaskDataCallback - function that will save data about task to component state
 * @param saveAllTasksDataCallback - function that will save data with all tasks to component state
 */
export const getSpecificJsTask = (taskNumber: number, 
    saveTaskDataCallback: (data: (IFJsTask | null | undefined)) => void,
    saveAllTasksDataCallback: (data: IFAllTasks[]) => void 
    ) => {
    // set loading screen
    saveTaskDataCallback(null)
     

       // fetch data about all html tasks 
       return db.collection('jsTasks')
       .onSnapshot(querySnapshot => {
           let tasks: IFAllTasks[] = [];
           let specificTask: IFJsTask | null = null;
           querySnapshot.docs.map(doc => {
               // create general data for single tasks, and push this data into tasks array
               const data: IFAllTasks = {
                   title: doc.data().title,
                   number: doc.data().number,
                   solved: checkSolvedTask(doc.data().title, "solvedJsTasks")
               }
               tasks.push(data);

               // find the particular one
               if (doc.data().number === taskNumber) {
                  // The beautify module does not support formatting javascript comments,
                // and they are important for checking the task, so you have to do it manually.
                // Any javascript task code should contain "@" in order to make spaces for user solution,
                // "@" gives the ability to create comment formatting.
                const formattedCode = doc.data().code.replaceAll("@", "\n");

                specificTask = {
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
               }
           });

           // check if task exists
           if (specificTask) {
               saveTaskDataCallback(specificTask);
           }
           else {
               saveTaskDataCallback(undefined);
           }
           return saveAllTasksDataCallback(tasks.sort((a, b) => a.number - b.number));
       });
};

/**
 * fetch all tasks with specific type
 * @param tasksType - tasks type that you want to get - "htmlTasks" | "jsTasks" | "cssTasks"
 * @param saveDataCallback - function that will save incoming data to component state
 * @param checkItem - the name used to retrieve data from localStorage by the function that
 * checks whether the user has already solved the task
 */
export const getAllTasks = (tasksType: "htmlTasks" | "jsTasks" | "cssTasks",
    checkItem: "solvedJsTasks" | "solvedHtmlTasks" | "solvedCssTasks",
    saveDataCallback: (data: IFAllTasks[]) => void) => {
    return db.collection(tasksType)
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
            return saveDataCallback(tasks.sort((a, b) => a.number - b.number));
        });
};


/**
 * fetch random quiz questions ( 10 questions)
 * @param type - type of quiz that you want to get - html, css or js
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getQuizQuestions = (type: string, saveDataCallback: (data: (IFQuizQuestion[] | null)) => void) => {
    // set loading screen
    saveDataCallback(null);

    return db.collection("quiz")
        .where("type", "==", type)
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
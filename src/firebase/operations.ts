import {db} from "./firebaseIndex";
import {IFAllTasks, IFCssTask, IFHtmlTask} from "../types/types";


/**
 * fetch html specific task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getHtmlTask = (taskNumber: number, saveDataCallback: (obj: any) => void) => {
    db.collection("htmlTasks")
        .onSnapshot(querySnapshot => {
            let tasks: any = []
            querySnapshot.docs.map(doc => {
                const task: IFHtmlTask = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    targets: doc.data().targets,
                    number: doc.data().number,
                    aid: doc.data().aid,
                    code: doc.data().taskCode
                }
                return tasks.push(task)
            });
            saveDataCallback(tasks[taskNumber - 1])
        })
}

/**
 * fetch css specific task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getCssTask = (taskNumber: number, saveDataCallback: (obj: any) => void) => {
    db.collection("cssTasks")
        .onSnapshot(querySnapshot => {
            let tasks: any = []
            querySnapshot.docs.map(doc => {
                const task: IFCssTask = {
                    title: doc.data().title,
                    number: doc.data().number,
                    introduction: doc.data().introduction,
                    aid: doc.data().aid
                }
                return tasks.push(task)
            });
            saveDataCallback(tasks[taskNumber - 1])
        })
}

/**
 * fetch all tasks
 * @param tasks  - tasks that you want to get - css, html, js
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getAllTasks = (tasks: "htmlTasks" | "jsTasks" | "cssTasks", saveDataCallback: (obj: any) => void) => {
    db.collection(tasks)
        .onSnapshot(querySnapshot => {
            let tasks: any = []
            querySnapshot.docs.map(doc => {
                const task: IFAllTasks = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    targets: doc.data().targets,
                    number: doc.data().number,
                }
                return tasks.push(task)
            });
            saveDataCallback(tasks)
        })
}
import {db} from "./firebaseIndex";
import {IFAllTasks, IFTask} from "../types/types";



/**
 * fetch specific task
 * @param tasks  - tasks that you want to get - css, html, js
 * @param taskNumber  - number of task
 * @param successCallback - function that saved incoming data to component state
 */
export const getTask = (tasks: "htmlTasks" | "jsTasks" | "cssTasks", taskNumber: number, successCallback: (obj: any) => void) => {
    db.collection(tasks)
        .onSnapshot(querySnapshot => {
            let tasks: any = []
            querySnapshot.docs.map(doc => {
                const task: IFTask = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    targets: doc.data().targets,
                    number: doc.data().number,
                    aid: doc.data().aid,
                    code: doc.data().taskCode
                }
                return tasks.push(task)
            });
            successCallback(tasks[taskNumber - 1])
        })
}

/**
 * fetch all tasks
 * @param tasks  - tasks that you want to get - css, html, js
 * @param successCallback - function that saved incoming data to component state
 */
export const getAllTasks = (tasks: "htmlTasks" | "jsTasks" | "cssTasks", successCallback: (obj: any) => void) => {
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
            successCallback(tasks)
        })
}
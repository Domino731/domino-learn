import {db} from "./firebaseIndex";
import {IFAllTasks, IFHtmlTask, IFCssTask, IFJsTask} from "../types/types";
const beautifyHtml = require('js-beautify').html
const beautifyCss = require('js-beautify').css

/**
 * fetch  specific html task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificHtmlTask = (taskNumber: number, saveDataCallback: (data: IFHtmlTask) => void) => {
    db.collection("htmlTasks")
        .onSnapshot(querySnapshot => {
            let tasks: IFHtmlTask[] = []
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
            const specficTask = tasks.filter(el => {
                if(el.number === taskNumber){
                    return el
                }
            })
            saveDataCallback(specficTask[0])
        })
}

/**
 * fetch specific css task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificCssTask = (taskNumber: number, saveDataCallback: (data: IFCssTask) => void) => {
    db.collection("cssTasks")
        .onSnapshot(querySnapshot => {
            let tasks: IFCssTask[] = []
            querySnapshot.docs.map(doc => {
                const task: IFCssTask = {
                    title: doc.data().title,
                    number: doc.data().number,
                    introduction: doc.data().introduction,
                    aid: doc.data().aid,
                    targets: doc.data().targets,
                    code: {
                        html: beautifyHtml(doc.data().code.html, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}),
                        css: beautifyCss(doc.data().code.css, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50}),
                    }
                }
                return tasks.push(task)
            });
            const specficTask = tasks.filter(el => {
                if(el.number === taskNumber){
                    return el
                }
            })
            saveDataCallback(specficTask[0])
        })
}

/**
 * fetch specific css task
 * @param taskNumber  - number of task
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getSpecificJsTask = (taskNumber: number, saveDataCallback: (data: IFJsTask) => void) => {
    db.collection("jsTasks")
        .onSnapshot(querySnapshot => {
            let tasks: IFJsTask[] = []
            querySnapshot.docs.map(doc => {
                const task: IFJsTask = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    targets: doc.data().targets,
                    number: doc.data().number,
                    aid: doc.data().aid,
                    code: doc.data().code
                }

                return tasks.push(task)

            });

            const specficTask = tasks.filter(el => {
                if(el.number === taskNumber){
                    return el
                }
            })
            saveDataCallback(specficTask[0])
        })
}

/**
 * fetch all tasks
 * @param tasks  - tasks that you want to get - css, html, js
 * @param saveDataCallback - function that saved incoming data to component state
 */
export const getAllTasks = (tasks: "htmlTasks" | "jsTasks" | "cssTasks", saveDataCallback: (data: IFAllTasks[]) => void) => {
    db.collection(tasks)
        .onSnapshot(querySnapshot => {
            let tasks: any[] = []
            querySnapshot.docs.map(doc => {
                return tasks.push(doc.data())
            });
            saveDataCallback(tasks)
        })
}
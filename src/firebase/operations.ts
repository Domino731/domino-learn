import {db} from "./firebaseIndex";

/**
 *
 * @param tasks  - tasks that you want to get - css, html, js
 * @param taskNumber  - number of task
 * @param successCallback - function that saved incoming data to component state
 */
interface TaskType {
    title: string,
    introduction: JSX.Element,
    target: JSX.Element,
    number: number,
    id: string
}

export const getTask = (tasks: "htmlTasks" | "jsTasks" | "cssTasks", taskNumber: number, successCallback: (obj: any) => void) => {
    db.collection(tasks)
        .onSnapshot(querySnapshot => {
            let tasks: any = []
            querySnapshot.docs.map(doc => {

                // const task: TaskType = {
                //     title: doc.data().title,
                //     introduction: JSON.parse(doc.data().introduction),
                //     target: JSON.parse(doc.data().target),
                //     number : doc.data().number,
                // }
                const task: TaskType = {
                    title: doc.data().title,
                    introduction: doc.data().introduction,
                    target: doc.data().target,
                    number : doc.data().number,
                    id: doc.data().id
                }
                console.log(task.title)
                console.log(task)
                tasks.push(task)
            });

            successCallback(tasks[taskNumber - 1])

        })

}

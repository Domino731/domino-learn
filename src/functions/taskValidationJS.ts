import {IFJsTaskTargets} from "../types/types";

export const taskValidationJS = (consoleTextArr: any[], userCode: string, taskTarget: IFJsTaskTargets, addPoints: () => void) => {
    if (taskTarget.type === "console") {
        if (consoleTextArr.includes(taskTarget.console)) {
            addPoints();
            return taskTarget.solved = true;
        } else {
            return taskTarget.solved = false;
        }
    } else {
// locations of comments based on which it will be possible to get
        // clean html code without comments and check user solution
        const startPoint: number = userCode.indexOf(`/* Place your code for task ${taskTarget.number} below */`)
        const endPoint: number = userCode.indexOf(`/* ${taskTarget.number} */`)

        // user code with lower case (without task comments and spaces)
        const userSolution: string = userCode
            .substring(startPoint, endPoint)
            .replace(`/* Place your code for task ${taskTarget.number} below */`, "")
            .replace(/\s/g, '')
            .toLowerCase()

        // task solutions with lower case (without task comments and spaces)
        const taskSolutions: string[] = taskTarget.solutions.map(el => el.replace(/\s/g, '').toLowerCase())

        // checking that every solution is equal to user code,
        // as we know in javascript we have infinite approaches to tasks, even to writing simple hello world
        // console.log("Hello World"); or console.log("Hello World") or console.log("hello world")
        // all approaches are defined :)
        taskSolutions.map(el => {
            // if correctly
            if (el === userSolution) {
                // add point
                addPoints()

                // change checkbox to green color by state change
                return taskTarget.solved = true
            }

            // if incorrectly
            else {
                //change checkbox to red color by state change
                return taskTarget.solved = false
            }

        })

    }

};
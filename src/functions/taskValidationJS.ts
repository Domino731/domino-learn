import {IFJsTaskTargets} from "../types/types";

export const taskValidationJS = (userCode: string, taskTarget: IFJsTaskTargets, addPoints: () => void) => {
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

        // if correctly
        if (taskSolutions.includes(userSolution)) {


            // change checkbox to green color by state change
             taskTarget.solved = true

            // add point
            return addPoints()
        }

        // if incorrectly
        else {
            //change checkbox to red color by state change
             taskTarget.solved = false
        }

};
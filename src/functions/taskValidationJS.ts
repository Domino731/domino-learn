import {IFJsTaskTargets} from "../types/types";

/**
 * Function that checks if user's solution matches one of task targets solution
 * @param userCode -  string from which the solution will be extracted
 * @param taskTarget - object with necessary information to validate task
 * @param addPoints - function that add points
 * @param logs - array with logs from console
 */
export const taskValidationJS =  (logs: any[], userCode: string, taskTarget: IFJsTaskTargets, addPoints: () => void) => {

    // locations of comments based on which it will be possible to get
    // clean html code without comments and check user solution
    const startPoint: number = userCode.indexOf(`/* Place your code for task ${taskTarget.number} below */`);
    const endPoint: number = userCode.indexOf(`/* ${taskTarget.number} */`);

    // user code with lower case (without task comments and spaces)
    const userSolution: string = userCode
        .substring(startPoint, endPoint)
        .replace(`/* Place your code for task ${taskTarget.number} below */`, "")
        .replace(/\s/g, '')
        .toLowerCase();

    // task solutions with lower case (without task comments and spaces)
    const taskSolutions: string[] = taskTarget.solutions.map(el => el.replace(/\s/g, '').toLowerCase());

    // checking that every solution is equal to user code,
    // as we know in javascript we have infinite approaches to tasks, even to writing simple hello world ->
    // console.log("Hello World"); or console.log("Hello World") or console.log("hello world")
    // all approaches are defined :)

    // There are two types of targets, - console and code. If type is equal to code then just check if
    // the solution is equal to any of the targets in the solution. If type is console, then check the
    // same as for type code, and that the console returns the required text.
    if (taskTarget.type === "code") {
        // if correctly
        if (taskSolutions.includes(userSolution)) {

            // add point
            addPoints();

            // change checkbox to green color by state change
            return taskTarget.solved = true;
        }

        // if incorrectly
        else {
            //change checkbox to red color by state change
            return taskTarget.solved = false;
        }
    }


    if (taskTarget.type === "console") {

        // set the array with logs with no spaces or in json notation
        const consoleText = logs.map(el => {
            if (typeof el === "string") {
                return el.trim();
            } else {
                return JSON.stringify(el);
            }
        });

        // if correctly
        if (taskSolutions.includes(userSolution) && consoleText.includes(taskTarget.console)) {


            // add point
            addPoints();

            // change checkbox to green color by state change
            return taskTarget.solved = true;
        }

        // if incorrectly
        else {
            //change checkbox to red color by state change
            return taskTarget.solved = false;
        }
    }

};
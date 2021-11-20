import { IFTaskTargets } from "../types/types";

/**
 * Function that checks if user's solution matches one of task targets solution
 * @param code -  string from which the solution will be extracted
 * @param taskTarget - object with necessary information to validate task
 * @param addPoint -> function that will add point
 */
export const taskValidationHtml = (code: string, taskTarget: IFTaskTargets, addPoint: () => void) => {

    // locations of comments based on which it will be possible to get
    // clean html code without comments in order to check user solution is correct
    const startPoint: number = code.indexOf(`<!-- Place your code for task ${taskTarget.number} below -->`);
    const endPoint: number = code.indexOf(`<!--${taskTarget.number}-->`);

    // user code with lower case (without task comments and spaces)
    const userSolution: string = code
        .substring(startPoint, endPoint)
        .replace(`<!-- Place your code for task ${taskTarget.number} below -->`, "")
        .replace(/\s/g, '')
        .toLowerCase();


        // check if user solution is matching to one of decalred for task target
        if (taskTarget.solutions.findIndex(solution => solution.replace(/\s/g, '').toLowerCase() === userSolution) >= 0) {
            // add point
            addPoint();

            // change checkbox to green color by state change
            taskTarget.solved = true;
        }

        // if incorrectly
        else {
            //change checkbox to red color by state change
            taskTarget.solved = false;
        }
};
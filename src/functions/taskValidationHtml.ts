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

   taskTarget.solutions.forEach(solution => {
        // task solution with lower case (without task comments and spaces)
        const taskSolution: string = solution.replace(/\s/g, '').toLowerCase();
        // change taskTargets state to inform user what he did correctly and what he did wrong -> checkboxes
        // in task targets list will change their color

        // if correctly
        if (taskSolution === userSolution) {
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
   });
};
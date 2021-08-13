import {IFTaskTargets} from "../types/types";

/**
 *
 * @param code -  string from which the solution will be extracted
 * @param taskTarget - object with necessary information to validate task
 * @param allTaskTargets - array with task targets, necessary to update and inform user what he did correct (checkboxes next to the task list)
 * @param addPoints -> add points
 * @param setTaskTargets - function that save updated taskTargets state
 */
export const taskValidationHtml = (code: string, taskTarget: IFTaskTargets, allTaskTargets: IFTaskTargets[], addPoints: () => number, setTaskTargets: (obj:IFTaskTargets[]) => void) => {
    // locations of comments based on which it will be possible to get user solution
    const startPoint: number = code.indexOf(`<!-- Place your code for task ${taskTarget.number} below -->`)
    const endPoint: number = code.indexOf(`<!--${taskTarget.number}-->`)
     console.log(taskTarget)
    // user solution with lower case (without task comments and spaces)
    const userSolution : string = code
        .substring(startPoint, endPoint)
        .replace(`<!-- Place your code for task ${taskTarget.number} below -->`, "")
        .replace(/\s/g, '')
        .toLowerCase()

    // task solution with lower case (without task comments and spaces)
    const taskSolution : string = taskTarget.solution.replace(/\s/g, '').toLowerCase()


    // variables needed to swap the object in the state
    let updatedTargets : IFTaskTargets[] = allTaskTargets
    let updatedTarget  : IFTaskTargets = taskTarget

    // change taskTargets state to inform user what he did correctly and what he did wrong -> checkboxes
    // in task targets list will change their color
    // if correctly
    if (taskSolution === userSolution) {
        // add point
        console.log(`zadanie number ${taskTarget.number} wykonano poprawnie`)
        // change checkbox
        updatedTarget.solved = true
        updatedTargets[taskTarget.number - 1] = updatedTarget
        setTaskTargets(updatedTargets)
        addPoints()
    }
    // if incorrectly
    else {
        // change checkbox
        updatedTarget.solved = false
        updatedTargets[taskTarget.number - 1] = updatedTarget
        setTaskTargets(updatedTargets)
    }


}
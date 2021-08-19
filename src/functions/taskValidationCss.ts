import {IFCssTaskTargetCss, } from "../types/types";

/**
 *
 * @param code -  string from which the solution will be extracted
 * @param taskTarget - object with necessary information to validate task
 * @param addPoints -> function that add points
 */

export const taskValidationCss = (code: string, taskTarget: IFCssTaskTargetCss,  addPoints: () => void,): void => {

    // locations from which the string with the  style delcarations will be extracted
    const startPoint: number = code.indexOf(`${taskTarget.selector}{`)
    const endPoint: number = code.indexOf(`}`)

    // user code with lower case (without task comments and spaces)
    const userSolution: string = code
        .substring(startPoint, endPoint)
        .replace(`${taskTarget.selector}{`, "")
        .replace(/\s/g, '')
        .toLowerCase()

    // number of declarations required to pass the target
    let requiredDeclarations : number = taskTarget.declarations.length

    // number of user declarations
    let userDeclarations : number = 0

    // checking if the user's solution (userSolution) contains required style declarations ()
    taskTarget.declarations.forEach(el => {

        // declaration without spaces
        const declaration : string = el.replace(/\s/g, '')

        if(userSolution.includes(declaration)){
            userDeclarations++;
        }
    })

    // change taskTargets state to inform user what he did correctly and what he did wrong -> checkboxes
    // in task targets list will change their color

    // if correctly
    if(userDeclarations === requiredDeclarations){
        addPoints()

        // change checkbox to green color by state change
        taskTarget.solved = true
    }

    // if incorrectly
    else {
        // change checkbox to green color by state change
        taskTarget.solved = false
    }
}
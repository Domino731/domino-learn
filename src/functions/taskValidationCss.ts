import { IFCssTaskTargetCss, } from "../types/types";

/**
 * Function that checks if user's solution matches one of task targets solution
 * @param userCode -  string from which the solution will be extracted
 * @param taskTarget - object with necessary information to validate task
 * @param addPoints -> function that add points
 */
export const taskValidationCss = (userCode: string, taskTarget: IFCssTaskTargetCss, addPoints: () => void,): void => {

    // remove spaces
    let code = userCode.replace(/\s/g, '');
    // locations from which the string with the  style declarations will be extracted
    const startPoint: number = code.indexOf(`${taskTarget.selector}`);
    code = code.substring(startPoint);

    // user code with lower case (without task comments and spaces)
    const userSolution: string = code
        .replace(`${taskTarget.selector}`, "")
        .replace(/\s/g, '')
        .toLowerCase()
    // number of declarations required to pass the target
    let requiredDeclarations: number = taskTarget.declarations.length;

    // number of user declarations
    let userDeclarations: number = 0;


    
    // checking if the user's solution (userSolution) contains required style declarations
    taskTarget.declarations.forEach(el => {

        // declaration without spaces
        const declaration: string = el.replace(/\s/g, '');

        //  Checking if the solution from the target is contained in the user code
        if (userSolution.includes(declaration)) {
            userDeclarations++;
        }
    });

    // check if user styles have all required css declarations

    // if correctly
    if (userDeclarations === requiredDeclarations) {
        addPoints();

        // change checkbox to green color by state change
        taskTarget.solved = true;
    }

    // if incorrectly
    else {
        // change checkbox to green color by state change
        taskTarget.solved = false;
    }
};
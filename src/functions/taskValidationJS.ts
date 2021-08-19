import {IFJsTaskTargets} from "../types/types";

export const taskValidationJS = (consoleTextArr: any[] ,taskTarget: IFJsTaskTargets,  addPoints: () => void) => {
    if(consoleTextArr.includes(taskTarget.console)){
        addPoints();
        return taskTarget.solved = true;
    }
    else {
        return taskTarget.solved = false;
    }
};
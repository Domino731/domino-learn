import {IFJsConsoleInitial} from "../types/types";

/** convert string to js code */
export const Logs = async (code : string) => {
    try{
        // eslint-disable-next-line no-eval
        return eval(code)
    }
    catch (err){
        console.error(err)
    }
}

/** initial log for console */ 
export const initial : IFJsConsoleInitial[] = [
    {
        method: "log",
        data: ["Your result"]
    }
];

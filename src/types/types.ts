//// tasks ////
// html
export type TypeHtmlTaskSolution = {
    target: string
    solution: string
    number: number
    solved: null | boolean
}

// localStorage
export type TypeLSHtmlTaskSolutions = {
    taskSolutions: TypeHtmlTaskSolution[]
    taskName: string,
    taskCode: string
}
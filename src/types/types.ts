import {RouteComponentProps} from "react-router";
//// general ////

interface IFMatchParams {
    taskNumber: string
}

//// For components ////

export interface IFPropsDescriptionItem {
    language: {
        getDsc: () => string,
        getIconAlt: () => string,
        getIconSrc: () => string,
        getLanguageName: () => string,
        getFigureSrc: () => string,
        getFigureAlt: () => string,
        getCodeSrc: () => string,
        getCodeAlt: () => string,
    },
    reverse?: boolean
}

export interface IFPropsTaskSelect {
    task: "htmlTasks" | "jsTasks" | "cssTasks"
    chosenTask: string,
    setTasks: (e: React.ChangeEvent<HTMLInputElement>) => void
    language: {
        getIconAlt: () => string,
        getIconSrc: () => string,
        getLanguageName: () => string,
        getFigureSrc: () => string,
        getFigureAlt: () => string,
    }
}

export interface IFPropsHtmlTaskFooterProps {
    allTasks: {
        title: string,
        introduction: string,
        targets: string[],
        number: number
    }[]
    taskNumber: number
}
export interface IFPropsHtmlTaskContent {
    task: {
        title: string,
        introduction: string,
        targets: IFTaskTargets[],
        number: number,
        aid: IFTaskAid[],
        code: string
    },
}

export interface IFPropsCssTaskContent {
    task: IFCssTask
}
export interface IFPropsTask extends RouteComponentProps<IFMatchParams> {
}
export type TypeHtmlTaskSolution = {
    target: string
    solution: string
    number: number
    solved: null | boolean
}

export interface IFTaskAid {
    type: "video" | "article"
    title: string
    author?: string
    link: string
}

export interface IFTaskTargets {
    target: string
    solution: string
    number: number
    solved: null | boolean
}

export interface IFHtmlTask {
    title: string
    introduction: string
    targets: IFTaskTargets[]
    number: number
    aid: IFTaskAid[]
    code: string
}
export interface IFCssTask {
    title: string
    number: number
    introduction: number
    aid: IFTaskAid[]
}

export interface IFAllTasks {
    title: string
    introduction: string,
    targets: string[]
    number: number
}

// localStorage
export type TypeLSHtmlTaskSolutions = {
    taskSolutions: TypeHtmlTaskSolution[]
    taskName: string,
    taskCode: string
}

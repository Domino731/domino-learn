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
    allTaskLength: number
}

export interface IFPropsCssTaskContent {
    task: IFCssTask,
    allTaskLength: number
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


export interface IFCssTaskTargetCss {
    type: "css"
    selector: string
    declarations: string[]
    number: number
    solved: null | boolean
    target: string
}

export interface IfCssTaskTargetHtml {
    type: "html"
    target: string
    solution: string
    number: number
    solved: null | boolean
}

export interface IFCssTask {
    title: string
    introduction: number
    number: number
    aid: IFTaskAid[],
    code: {
        html: string
        css: string
    }
    targets: (IFCssTaskTargetCss | IfCssTaskTargetHtml) []
}

export interface IFHtmlTask {
    title: string
    introduction: string
    number: number
    aid: IFTaskAid[]
    code: string
    targets: IFTaskTargets[]

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
    userCode: string
}

export interface  IFLSCssTaskSolutions {
    taskSolutions: (IFCssTaskTargetCss | IfCssTaskTargetHtml) []
    taskName: string,
    userCode: { html: string, css: string }
}
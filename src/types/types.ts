import {RouteComponentProps} from "react-router";
import React from "react";
import {QuizQuestion} from "../components/quiz/QuizQuestio";

//// general ////

interface IFMatchParams {
    taskNumber: string
    item: string
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
        getCode: () => IFProgramingCode,

    },
    reverse?: boolean
}

export interface IFPropsTaskResultWindow {
    srcDoc: string
}

export interface IFPropsTaskAceEditor {
    mode: string
    editorTheme: string
    userCode: string
    editorFS: string | number
    changeUserCode: (newValue: string) => void
    addAnnotations: (value: any) => void
}

export interface IFPropsTaskAceEditorSettings {
    handleChangeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void
    editorTheme: string
    handleChangeFs: (e: React.ChangeEvent<HTMLInputElement>) => void
    editorFs: string | number
    toggleForm: () => void
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

export interface IFPropsTasksBoard {
    selectedTasks: string
}

export interface IFPropsTaskIntroduction {
    title: string
    introductionInnerHtml: string | number
    imgAlt: string
    imgSrc: string
}

export interface IFPropsTaskTargets {
    targets: (IFTaskTargets | IFJsTaskTargets | IFCssTaskTargetCss | IfCssTaskTargetHtml)[]
    title: string
    aidArr: IFTaskAid[]
}

export interface IFPropsHtmlTaskFooter {
    allTasks: {
        title: string,
        introduction: string,
        targets: string[],
        number: number
    }[]
    taskNumber: number
}

export interface IFPropsHtmlTaskContent {
    task: IFHtmlTask
    allTaskLength: number
}

export interface IFPropsCssTaskContent {
    task: IFCssTask,
    allTaskLength: number
}

export interface IFPropsCssTaskFooter {
    allTasks: IFAllTasks[],
    taskNumber: number
}

export interface IFPropsJsTask {
    task: IFJsTask,
    allTaskLength: number
}

export interface IFPropsTaskFooter {
    allTasks: IFAllTasks[],
    taskNumber: number
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

export interface IFJsTaskTargets {
    target: string
    console: string
    solutions: string[]
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
    originalCode: {
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
    code: string,
    originalCode: string
    targets: IFTaskTargets[]
}

export interface IFJsTask {
    title: string
    introduction: string
    number: number
    aid: IFTaskAid[]
    code: string
    originalCode: string
    targets: IFJsTaskTargets[]
}

export interface IFAllTasks {
    title: string
    number: number
    solved: boolean
}


export interface IFJsConsoleInitial {
    method: string
    data: (string | number)[]
}

export interface IFJsConsoleLogs {
    data: any[]
    amount?: number
}


export type TypeLSHtmlTaskSolutions = {
    taskSolutions: TypeHtmlTaskSolution[]
    title: string,
    code: string
}

export interface IFLSCssTaskSolutions {
    taskSolutions: (IFCssTaskTargetCss | IfCssTaskTargetHtml) []
    title: string,
    userCode: { html: string, css: string }
}

export interface IFLSjsTaskSolutions {
    taskSolutions: IFJsTaskTargets[]
    title: string,
    userCode: string
}

export interface IFProgramingCode {
    type: string
    code: string
    srcDoc: string
}

export interface IFEditorCode {
    html: string
    css: string
    js: string
}

export interface IFEditorSettings {
    theme: string
    fontSize: string | number
    areas: string
}

export interface IFPropsCodeEditorHeader {
    editorSettings: IFEditorSettings
    changeFs: (e: React.ChangeEvent<HTMLInputElement>) => void
    changeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void
    changeAreas: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IFPropsCodeEditorContent {
    editorSettings: IFEditorSettings
}

export interface IFTransformQuizItem {
    X: number,
    Y: number
}

export interface IFPropsQuiz extends RouteComponentProps<IFMatchParams> {
}

export interface IFQuizQuestion {
    question: string
    coins: number
    answers: {
        correct: boolean
        text: string
    }[]
}

export interface IFPropsQuizQuestion {
    data: IFQuizQuestion
    currQuestionIndex: number
    switchToNextQuestion: () => void
    questionsLeft: number | string
    addPoint: () => void
    addCoins: (coins: number) => void
}

export interface IFAnswer {
    correct: boolean
    text: string
    correctly?: boolean
}
export interface IFPropsQuizSummary{
   item: {
       figureSrc: string
       figureAlt: string
       iconSrc: string
       iconAlt: string
   }
    restartPath: string
    coinsAmount: number
    questionsAmount: number
    correctQuestions: number
}
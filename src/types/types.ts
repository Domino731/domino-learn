import {RouteComponentProps} from "react-router";
import React from "react";

///////////////////////////////////////
//// For components //////////////////
/////////////////////////////////////

export interface IFPropsDescriptionCard {
    language: {
        getDsc: () => string;
        getIconAlt: () => string;
        getIconSrc: () => string;
        getLanguageName: () => string;
        getFigureSrc: () => string;
        getFigureAlt: () => string;
        getExemplaryCodeLink: () => string;

    }
    reverse?: boolean;
}

export interface IFPropsTaskResultWindow {
    srcDoc: string;
}

export interface IFPropsTaskAceEditorSettings {
    handleChangeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
    editorTheme: string;
    handleChangeFs: (e: React.ChangeEvent<HTMLInputElement>) => void;
    editorFs: string | number;
    toggleForm: () => void;
}

export interface IFPropsTaskSelect {
    task: "htmlTasks" | "jsTasks" | "cssTasks";
    chosenTask: string;
    setTasks: (e: React.ChangeEvent<HTMLInputElement>) => void;
    language: {
        getIconAlt: () => string;
        getIconSrc: () => string;
        getLanguageName: () => string;
        getFigureSrc: () => string;
        getFigureAlt: () => string;
    }
}

export interface IFPropsTasksBoard {
    selectedTasks: string;
}

export interface IFPropsTaskIntroduction {
    title: string;
    introductionInnerHtml: string | number;
    imgAlt: string;
    imgSrc: string;
}

export interface IFPropsTaskTargets {
    targets: (IFTaskTargets | IFJsTaskTargets | IFCssTaskTargetCss | IfCssTaskTargetHtml)[];
    title: string;
    aidArr: IFTaskAid[];
}


export interface IFPropsHtmlTaskContent {
    task: IFHtmlTask;
    allTaskLength: number;
}

export interface IFPropsCssTaskContent {
    task: IFCssTask;
    allTaskLength: number;
}


export interface IFPropsJsTask {
    task: IFJsTask;
    allTaskLength: number;
}

export interface IFPropsTaskFooter {
    allTasks: IFAllTasks[];
    taskNumber: number;
}

export interface IFPropsTask extends RouteComponentProps<IFMatchParams> {
}

export interface IFPropsCodeEditorHeader {
    editorSettings: IFEditorSettings
    includeResetCSS: boolean;
    changeFs: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeTheme: (theme: string) => void;
    changeAreas: (areas: string) => void;
    changeResetCSS: () => void;
}

export interface IFPropsCodeEditorContent {
    editorSettings: IFEditorSettings;
}

export interface IFPropsQuiz extends RouteComponentProps<IFMatchParams> {
}

export interface IFPropsError404 {
    redirectPath: string;
}

export interface IFPropsQuizQuestion {
    data: IFQuizQuestion
    currQuestionIndex: number;
    switchToNextQuestion: () => void;
    questionsLeft: number | string;
    addPoint: () => void;
    addCoins: (coins: number) => void;
    characterGraphic: string;
}

export interface IFPropsQuizSummary {
    languageLanguageData: {
        figureSrc: string;
        figureAlt: string;
        iconSrc: string;
        iconAlt: string;
    }
    coinsAmount: number;
    questionsAmount: number;
    correctQuestions: number;
    resetQuiz: () => void;
}

export interface IFPropsError404 {
    redirectPath: string;
}


///////////////////////////////////////
//// For tasks ///////////////////////
/////////////////////////////////////

export type TypeHtmlTaskSolution = {
    target: string;
    solution: string;
    number: number;
    solved: null | boolean;
}

export interface IFTaskAid {
    type: "video" | "article";
    title: string;
    author?: string;
    link: string;
}

export interface IFTaskTargets {
    target: string;
    solution: string;
    number: number;
    solved: null | boolean;
}

export interface IFJsTaskTargets {
    target: string;
    console: string;
    solutions: string[];
    number: number;
    solved: null | boolean;
    type: "code" | "console";
}


export interface IFCssTaskTargetCss {
    type: "css";
    selector: string;
    declarations: string[];
    number: number;
    solved: null | boolean;
    target: string;
}

export interface IfCssTaskTargetHtml {
    type: "html";
    target: string;
    solution: string;
    number: number;
    solved: null | boolean;
}

export interface IFCssTask {
    title: string;
    introduction: number;
    number: number;
    aid: IFTaskAid[];
    includeHtml: boolean;
    code: {
        html: string;
        css: string;
    };
    originalCode: {
        html: string;
        css: string;
    };
    targets: (IFCssTaskTargetCss | IfCssTaskTargetHtml) [];
}

export interface IFHtmlTask {
    title: string;
    introduction: string;
    number: number;
    aid: IFTaskAid[];
    code: string;
    originalCode: string;
    targets: IFTaskTargets[];
}

export interface IFJsTask {
    title: string;
    introduction: string;
    number: number;
    aid: IFTaskAid[];
    code: string;
    originalCode: string;
    targets: IFJsTaskTargets[];
}

export interface IFAllTasks {
    title: string;
    number: number;
    solved: boolean;
}


export interface IFJsConsoleInitial {
    method: string;
    data: (string | number)[];
}
export interface TaskAidProps {
    aid: {
        type: "video" | "article";
        title: string;
        author?: string | null;
        link?: string;
    };
}

///////////////////////////////////////
//// For local storage //////////////////
/////////////////////////////////////

export type TypeLSHtmlTaskSolutions = {
    title: string;
    code: string;
    solvedTargets: number[];
}

export interface IFLSCssTaskSolutions {
    title: string;
    userCode: { html: string, css: string };
    solvedTargets: number[];
}

export interface IFLSjsTaskSolutions {
    title: string;
    userCode: string;
    solvedTargets: number[];
}


export interface IFProgramingCode {
    type: string;
    code: string;
    srcDoc: string;
}

export interface IFEditorCode {
    html: string;
    css: string;
    js: string;
}

export interface IFEditorSettings {
    theme: string;
    fontSize: string | number;
    areas: string;
    includeResetCSS: boolean;
}

export interface IFQuizQuestion {
    question: string;
    coins: number;
    answers: {
        correct: boolean;
        text: string;
    }[];
}

export interface IFQuizItem {
    figureSrc: string;
    figureAlt: string;
    iconSrc: string;
    iconAlt: string;
}


//// general ////

interface IFMatchParams {
    taskNumber: string;
    item: string;
}
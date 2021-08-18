import {IFProgramingCode} from "../types/types";

export class ProgramingLanguage {
    private languageName: string
    private icon: {
        src: string
        alt: string
    }
    private figure: {
        src: string,
        alt: string
    }
    private code: IFProgramingCode
    private description: string


    constructor(languageName: string, iconSrc: string, iconAlt: string,
                description: string, figureSrc: string, figureAlt: string,
                code: IFProgramingCode) {
        this.languageName = languageName
        this.icon = {
            src: iconSrc,
            alt: iconAlt
        }
        this.figure = {
            src: figureSrc,
            alt: figureAlt
        }
        this.code = code
        this.description = description
    }


    getLanguageName(): string {
        return this.languageName
    }

    getIconSrc(): string {
        return this.icon.src
    }

    getIconAlt(): string {
        return this.icon.alt
    }

    getDsc(): string {
        return this.description
    }

    getFigureSrc(): string {
        return this.figure.src
    }

    getFigureAlt(): string {
        return this.figure.alt
    }

    getCode(): IFProgramingCode {
        return this.code
    }
}

export {}
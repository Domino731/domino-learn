

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
    private code: {
        src: string,
        alt: string
    }
    private description: string

    constructor(languageName: string ,iconSrc: string, iconAlt: string,
                description: string, figureSrc: string, figureAlt: string,
                codeSrc: string, codeAlt: string) {
        this.languageName = languageName
        this.icon = {
            src: iconSrc,
            alt: iconAlt
        }
        this.figure = {
            src: figureSrc,
            alt: figureAlt
        }
        this.code = {
            src: codeSrc,
            alt: codeAlt,
        }
        this.description = description
    }


    getLanguageName() : string {
        return this.languageName
    }
    getIconSrc() : string {
        return this.icon.src
    }
    getIconAlt(): string {
        return this.icon.alt
    }
    getDsc() : string {
        return this.description
    }
    getFigureSrc() : string {
        return this.figure.src
    }
    getFigureAlt() : string {
        return this.figure.alt
    }

    getCodeSrc() : string {
        return this.code.src
    }
    getCodeAlt() : string {
        return this.code.alt
    }
}

export {}
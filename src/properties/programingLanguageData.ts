/**class for programing languages including language name, icon src, alt, figure src, alt, code, description */ 
export class ProgramingLanguageData {
    
    private languageName: string
    private icon: {
        src: string
        alt: string
    }
    private figure: {
        src: string,
        alt: string
    }
    private exemplaryCodeLink: string
    private description: string


    constructor(languageName: string, iconSrc: string, iconAlt: string,
                description: string, figureSrc: string, figureAlt: string,
                exemplaryCodeLink: string) {
        this.languageName = languageName
        this.icon = {
            src: iconSrc,
            alt: iconAlt
        }
        this.figure = {
            src: figureSrc,
            alt: figureAlt
        }
        this.exemplaryCodeLink = exemplaryCodeLink;
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

    getExemplaryCodeLink(): string{
        return this.exemplaryCodeLink;
    }
}

export {}
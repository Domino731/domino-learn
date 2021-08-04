import htmlIcon from "../images/html_icon.png"
import builder from "../images/htmlBuilder_desciption.png"
import htmlCode from "../images/html_codeExample.png"
const htmlDsc = `HyperText Markup Language is a markup language. 
Thanks to it, we can create the structure of the website. 
Each tag has its own purpose, for example a tag is responsible 
for hyperlinks or anchors, and the img tag is responsible for graphics as 
page content. The current html version is html5 which brought many improvements 
over version 4`;


class ProgramingLanguage {
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

export const htmlClass: ProgramingLanguage =
    new ProgramingLanguage("Html",htmlIcon, "Html icon",
        htmlDsc, builder,
        "the figure of the builder with a key symbolizes programming in html", htmlCode, "html example code")
export {}
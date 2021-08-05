import {ProgramingLanguage} from "./front_end_languages";
import htmlIcon from "../images/html_icon.png"
import builder from "../images/htmlBuilder_desciption.png"
import htmlCode from "../images/html_codeExample.png"

const htmlDsc = `HyperText Markup Language is a markup language. 
Thanks to it, we can create the structure of the website. 
Each tag has its own purpose, for example a tag is responsible 
for hyperlinks or anchors, and the img tag is responsible for graphics as 
page content. The current html version is html5 which brought many improvements 
over version 4`;

export const htmlClass: ProgramingLanguage =
    new ProgramingLanguage("Html", htmlIcon, "Html icon",
        htmlDsc, builder,
        "the figure of the builder with a key symbolizes programming in html", htmlCode, "HTML example code")
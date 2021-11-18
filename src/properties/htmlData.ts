import {ProgramingLanguageData} from "./programingLanguageData";
import htmlIcon from "../images/html_icon.png";
import character from "../images/builder_character.svg";

const htmlDsc = `HyperText Markup Language is a markup language. 
Thanks to it, we can create the structure of the website by tags. 
Each tag has its own purpose, for example <a> tag is responsible 
for hyperlinks or anchors, and the img tag is responsible for graphics as 
page content. The current html version is html5 which brought many improvements 
over version 4. When you program in HTML you become a builder whose main task is to create a 
structure for a web page`;

/** HTML data - title, character, description, examplary code link... */
export const HTMLData: ProgramingLanguageData =
    new ProgramingLanguageData("Html",
     htmlIcon,
      "Html icon",
        htmlDsc,
         character,
        "the figure of the builder with a key symbolizes programming in html",
         "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default");
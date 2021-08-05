import {ProgramingLanguage} from "./front_end_languages";
import cssIcon from "../images/css_icon.png";
import painter from "../images/css_painter.png";
import cssCode from "../images/css_exampleCode.png";
const cssDsc = `Cascading Style Sheets is a language that is used to describe
 the appearance of our website. 
Thanks to it, we can change, for example, the background color, set the capitalization or decorations. To create a style for a 
specific element, create a rule. Each rule in CSS has a selector, a property, and a property value`
export const cssClass = new ProgramingLanguage("CSS", cssIcon,
    "Css icon", cssDsc, painter, "The painter symbolizes styling in css", cssCode, "CSS example Code")
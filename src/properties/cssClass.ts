import { ProgramingLanguage } from "./front_end_languages";
import cssIcon from "../images/css_icon.png";
import character from "../images/painter_character.svg";
const cssDsc = `Cascading Style Sheets is a language that is used to describe
 the appearance of our website. 
Thanks to it, we can change, for example, the background color, set the capitalization or decorations. To create a style for a 
specific element, create a rule. Each rule in CSS has a selector, properties and their values. 
When you create styles in css you become an artist with almost unlimited possibilities.
 Almost, because you have to remember that in we have a lot of browsers, 
 which are have different support for styles.
`;


// css language data
export const cssClass = new ProgramingLanguage(
  "CSS",
  cssIcon,
  "Css icon",
  cssDsc,
  character,
  "The painter symbolizes styling in css",
  "https://www.w3schools.com/css/tryit.asp?filename=trycss_default");
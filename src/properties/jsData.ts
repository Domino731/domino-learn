import {ProgramingLanguageData} from "./programingLanguageData";
import jsIcon from "../images/js_icon.png";
import character from "../images/robot_character.svg";
const jsDsc = `JavaScript is a scripting language by means of which we create interaction with the user, 
thanks to it we can create dynamic content on the page. 
This language is one of the most popular programming languages in the world.
 JS is so flexible that we can even create games using its engine. However to use JS you need some time to get used to it. 
 We can say that by programming in JavaScript you are creating a robot that will be responsible for the page interaction with the user
 `

/** JavaScript data - title, character, description, examplary code link... */
export const JSData: ProgramingLanguageData = new ProgramingLanguageData(
    "JavaScript",
    jsIcon,
    "JavaScript Icon",
    jsDsc,
     character,
    "robot symbolizing javaScript programming",
    "https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst");
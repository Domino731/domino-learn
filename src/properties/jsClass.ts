import {ProgramingLanguage} from "./front_end_languages";
import jsIcon from "../images/js_icon.png";
import robot from "../images/js_robot.png";
import {IFProgramingCode} from "../types/types";

const jsDsc = `JavaScript is a scripting language with which we can create dynamic content on our website, e.g. changing graphics,
adding an animation. Thanks to it, the user can interact with the interface. JS is very versatile and you can do almost anything with it, but it takes some time to get to know him.`

const jsCode = `console.log("Hello World");

const num1 = 12;
const num2 = 33;
console.log(num1 + num2);

const arr = [1,2, "dog", "cat"];
console.log(arr[2]);

const car = {
  name: "Ferrari 296 gtb",
  hp: 820
}
console.log(car.hp)

function sayHelloTo(name){
  console.log("Hello " + name)
}
sayHelloTo("Tom");`

const cssCode = `
.wrapper{
  font-family: sans-serif;
}
span{
  display: block;
}
.number{
  color: #4F86C6;
}

`
const htmlCode = `
<div >
  <span>Hello World</span>
  <span class="number">45</span>
  <span>dog</span>
  <span class="number">820</span>
  <span>Hello Tom</span>
</div>
`
const code : IFProgramingCode = {
    type: "javascript",
    code: jsCode,
    srcDoc: `
        <!DOCTYPE html>
          <html lang="en">
          <head><title>JAVASCRIPT</title>
          <style>${cssCode}</style>
          </head>
          <body>${htmlCode}</body>
          </html>`
}

// js language data
export const jsClass = new ProgramingLanguage(
    "JS",
    jsIcon,
    "JavaScript Icon",
    jsDsc,
    robot,
    "robot symbolizing javaScript programming",
    code)
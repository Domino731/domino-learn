import {ProgramingLanguage} from "./front_end_languages";
import jsIcon from "../images/js_icon.png";
import {IFProgramingCode} from "../types/types";
import character from "../images/robot_character.svg";
const jsDsc = `JavaScript is a scripting language by means of which we create interaction with the user, 
thanks to it we can create dynamic content on the page. 
This language is one of the most popular programming languages in the world.
 JS is so flexible that we can even create games using its engine. However to use JS you need some time to get used to it. 
 We can say that by programming in JavaScript you are creating a robot that will be responsible for the page interaction with the user
 `

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
    "JavaScript",
    jsIcon,
    "JavaScript Icon",
    jsDsc,
     character,
    "robot symbolizing javaScript programming",
    code)
import {ProgramingLanguage} from "./front_end_languages";
import cssIcon from "../images/css_icon.png";
import painter from "../images/css_painter.png";
import {IFProgramingCode} from "../types/types";

const cssDsc = `Cascading Style Sheets is a language that is used to describe
 the appearance of our website. 
Thanks to it, we can change, for example, the background color, set the capitalization or decorations. To create a style for a 
specific element, create a rule. Each rule in CSS has a selector, a property, and a property value`;

const styles = `
h1{
  color: red;
  text-decoration: underline;
  text-align: center;
}
.paragraph{
  border: 2px solid blue;
}
img{
  display: block;
  width: 90%;
  margin: 0 auto;
}
h2{
  text-align: center;
  letter-spacing: 0.063rem;
  transition: 0.3s
}
h2:hover{
  letter-spacing: 0.125rem;
}
.list {
  display: flex;
}
.list__element {
  display: block;
  width: 33%;
  height: 50px;
  text-align: center;
  overflow: hidden;
   transition: 0.4s;
}

.list__element--coffee{
  border-left: 2px solid black;
}
.list__element--tea{
  border-bottom: 2px solid black;
}
.list__element--milk{
  border-right: 2px solid black;
}

.list__element--coffee:hover{
  background: red;
}

.list__element--tea:hover{
  color: #fff;
  background: #011627;
}
.list__element--milk:hover{
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
}

.list__ordered{
  border: 2px solid red;
}
.list__ordered li:first-child{
  font-size: 24px;
}
.list__ordered li:nth-child(2){
  text-align: left;
}
.list__ordered li:last-child::after{
  content: " (lactose-free)";
}
`
const htmlCode = ` <h1>My first Heading</h1>
 <p class="paragraph">My first paragraph.</p>
 <img src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/10/Moon-missions.jpg" alt="Moon" width="100%">
 <h2>An Unordered HTML List</h2>

 <ul class="list">
  <li class="list__element list__element--coffee">Coffee</li>
  <li class="list__element list__element--tea">Tea</li>
  <li class="list__element list__element--milk">Milk</li>
 </ul>

<h2>An Ordered HTML List</h2>

 <ol class="list list__ordered">
  <li class="list__element">Coffee</li>
  <li  class="list__element">Tea</li>
  <li  class="list__element">Milk</li>
 </ol>
`
const code: IFProgramingCode = {
    type: "css",
    code: styles,
    srcDoc: `
        <!DOCTYPE html>
          <html lang="en">
          <head><title>CSS</title>
          <style>${styles}</style>
          </head>
          <body>${htmlCode}</body>
          </html>`
};

// css language data
export const cssClass = new ProgramingLanguage("CSS", cssIcon,
    "Css icon", cssDsc, painter, "The painter symbolizes styling in css", code);
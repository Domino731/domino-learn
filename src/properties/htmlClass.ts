import {ProgramingLanguage} from "./front_end_languages";
import htmlIcon from "../images/html_icon.png"
import builder from "../images/htmlBuilder_desciption.png"
import {IFProgramingCode} from "../types/types";
import {formatCode} from "../functions/formatCode";

const htmlDsc = `HyperText Markup Language is a markup language. 
Thanks to it, we can create the structure of the website. 
Each tag has its own purpose, for example a tag is responsible 
for hyperlinks or anchors, and the img tag is responsible for graphics as 
page content. The current html version is html5 which brought many improvements 
over version 4`;
const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
<title>HTML</title>
</head>
<body>

<h1>My first Heading</h1>
<p>My first paragraph.</p>
<img src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/10/Moon-missions.jpg" alt="Moon" width="100%">
<h2>An Unordered HTML List</h2>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  

<h2>An Ordered HTML List</h2>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> 
</body>
</html>
`


const code : IFProgramingCode = {
    type: "html",
    code: formatCode("html", htmlCode),
    srcDoc: htmlCode
}
export const htmlClass: ProgramingLanguage =
    new ProgramingLanguage("Html", htmlIcon, "Html icon",
        htmlDsc, builder,
        "the figure of the builder with a key symbolizes programming in html", code)
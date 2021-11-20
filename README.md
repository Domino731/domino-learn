# DOMINO LEARN
This project aims to help begginers to acquainted with front-end world. The app has a space theme beacuse as we know programming is very large topic, and for the easiest things we have a hundred of approches. I nested 3 different types of tasks in there - js, html and css, and everything was made for automation. The tasks for particular section comes from firestore database so you have ability to adding new tasks in simple way. I also created my own website sandbox code editor using `ace-editor` package. Sandbox editor has an ability to change layout for editor, this was achived by use grid-area property. Each editor (in js, html, css tasks too)on site has also ability to change theme and font-size, moreover user apply css reset in sandbox editor. The last section in this project is quiz section with js, html and css questions. All questions comes from firestore database, so you can easily add new. Each question has a coins which are available to gain when the user has correctly selected the answer.
Tasks progress, sandbox editor code and the quiz coins are saving in local storage. Everything in this project was made with automation in mind, so if you want add new task for specific section or new quiz question, everythind is described below
section comes from firestore 

## **Technologies**

Project is created with:
* React
* React Router
* Typescript
* Styled-components
* Google Firestore database
* [Js-beautify](https://github.com/beautify-web/js-beautify)
* [Console-feed](https://github.com/samdenty/console-feed)
* [React Ace Editor](https://github.com/securingsincity/react-ace)
* [React-create-app](https://github.com/facebook/create-react-app)

## **Routing**
Routing in this projec was created with `react-router`

-Route - Component - Description
* `/` - `<HomePage/>` - Home page site with introduction, and navigation to specific project section - tasks, sandbox editor or quiz
* `/html-task/:taskNumber` - `<HtmlTask/>` - Section with html task
* `/css-task/:taskNumber` - `<CSSTask/>` - Section with css task
* `/js-task/:taskNumber` - `<HtmlTask/>` - Section with js task
* `/code-editor` - `<CodeEditor/>` - Sandbox code editor
* `/quiz-menu` - `<QuizMenu/>` - Navigation to the specific type of quiz - js, html or css
* `/quiz/:quizType` - `<Quiz/>` - Quiz with section for the specific type of programming language

## **Google Firestore data structure**
 **Quiz questions - `/quiz collection`**

There are documents which every is including `type` key, which is pointing at the type of quiz and there is `questions` key which is an array with questions for quiz. Each element in this array contains following data:

|key| type| description |
|-|-|-|
|coins| number | amount of coins which are available to gain on correct answer|
|question | string | text of question |
|answers| {object} array | each element is containing: `correct` key (boolean value) - pointing that is the answer is correct, `handleChangeSelectedAnswer()` in `<QuizQuestion/>` component will be know know if user has gave a correct answer. And there is `text` key which is holding answer text |

**If you want to add new question then just add above data to `question` key in specific document - /quiz/doc.questions**

## **General data for tasks**
`htmlTasks/`, `cssTasks`, `jsTasks` collections are containing data for tasks, where each every document in this collections is responsible for providing necessary data for specific task section for example: `/html-task/:taskNumber` with html task. Documents that are nested in this collections. have common set of keys that are required to correctly render the appropriate component.
|key| type| description |
|-|-|-|
|introduction | string | HTML code which will be displayed in task introduction by `<TaskIntroduction/>` component|
|number | number | task number on the basis the appropriate function responsible for downloading data will download a document with this task index|
|title | string | title for the task|
|aid | {object} array | array with help matarials (article or video) for task. Each element have following data: <ul><li>author - string - author of material</li> <li>link - string - link to page with this material</li> <li>type - 'article' or 'video' - type of material, used in `<TaskAid/>` component to create appropriate card theme with icon</li><li>title - string - matarial title, for example: JavaScript console tutorial</li></ul>|

**Remember, if you want to add new task, first thing is to do, is to add above data**

## **HTML tasks data**
The data which is responsible for particular html tasks comes from `htmlTasks/` collection. Each document has a general data for task (this data is described above) and 2 additional keys that are required for html tasks:
|key| type| description |
|-|-|-|
|code | string | that code will be displayed in task code editor. The most important thing is you must add comments on basis which the `taskValidationHtml()` function will be checking the if particular task target was completed correctly. For example if you want to user create a h1 heading the code must be like this `<!-- Place your code for task 1 below --> {hero user is writing code} <!--1-->`. Number 1 is means this fragment of code is for task target number 1|
|targets|{object} array| an array with necessary data to complete task. Each element is containg following data: <ul><li>number - number - index of comment in code on the basis which `taskValidationHtml()` function will cut the piece of code that is between these comments and check if it fits the solution. It's also needed for `getHtmlTaskTargetsFromLS()` function which is checking if the target was completed</li><li>solutions - string array - array with solutions for the target. For example if you want to user create `div` tag with id attribute with `cat` value it must looks like that: [`<div id='cat'></div>`, `<div id="cat"></div>`]</li><li>solved - null - you must assing null value. This key is changing in `taskValidationHtml()` function. This key is important beacuse user will be know he complete the task target correctly -> checkbox color will change in `<TaskTargets/>` component</li><li>target - string - target instruction, what user must do</li></ul> |


**If you want to add new html task, you must add above data and general data for the new task**

## **CSS tasks data**
The data which is responsible for particular tasks comes from `cssTasks/` collection. Each document has a general data for task (this data is described above) and 3 additional keys that are required for css tasks :

|key| type| description |
|-|-|-|
|code | {object}| code that will be displayed in edtior: <ul><li>html - string - the code that determines html structure</li><li>css - string - code with css styles, without any comments</li></ul>| 
|includeHhtml|boolean | value that determinse if user has access to html code editor. In `<CSSTaskContent` component he has opportunity to toggle editor (between css and html). If you want to user makes some changes in html, then  set this key to true|
|targets|{object} array| an array with necessary data to complete task. Each element is containg following data: <ul><li>type - 'css' or 'html' - target type, if you want to user makes changes in html code (inline styles for example) then set html type, and dont add below keys, add these keys like in html target. if you set css type then add below keys</li><li>solved - boolean - solved - null - you must assing null value. This key is changing in `taskValidationCss()` function. This key is important beacuse user will be know he complete the task target correctly -> checkbox color will change in `<TaskTargets/>` component</li><li>target - string - target instruction,requirements</li><li>number - number - number of the task target, in css tasks it's needed only for checkig if the task target was completed by `getCssTaskTargetsFromLS()` function</li><li>selector - string - css selector needed for `taskValidationCss()` function which checks is the selector has the required styles from `delcarations` array </li><li>delcarations - string array - array with declarations which are must be in specific selector `selector` key. Example: ['font-size: 44px;', 'text-align:center;']</li></ul> 

**If you want to add new css task, you must add above data and general data for the new task**

## **JS tasks data**
The data which is responsible for particular tasks comes from `jsTasks/` collection. Each document has a general data for task (this data is described above) and 2 additional keys that are required for javascript tasks :
|key| type| description |
|-|-|-|
|code | string | javascript that will be displayed in code editor. You must notice that js-beautify doesn't support comments breaks, it's important for `taskValidationJs()` which is cutting user's code and comparing this code to declared solutions for task target. So if you want to create space then add '@' character to your code -> `/* Place your code for task 1 below */ @@  /* 1 */`. In `getSpecificJsTask()` function these '@' will be replaced with '\n' in order to create space. This example will have 2 free lines in editor. Write code for task like for html but use these 'task syntax' -> `/* Place your code for task {place here task target number} below */ @@  /* {place here task target number} */`. Function `taskValidationJs()` will be known where funcition will know what piece of code to cut and compare it to declared solutions in specific task target|
|targets|{object} array| an array with necessary data to complete task. Each element is containg following data: <ul><li>type - 'console' or 'code' - specify whether the task target is to be checked in `taskValidationJs()` function by 'clean' code written by user in code editor, or by messages from console. For example if you want to check check that user has printed in console 'Hello World' you must set this key to 'console' value, otherwise when you want to user create a variable with 'cat' value, then you must set this key to 'code' value</li><li>console - string - if you set above key to code, then set this key to empty string, otherwise set there a value that must be printed in the console</li>solved - boolean -  set null, `taskValidationJs()` function will set this key to true or false and the color of the checkbox will change.<li>number - number -number of the task needed to `taskValidationJs()` function which will cut the code between comments and will check if it is included in the declared solutions</li> <li>solutions - string array - array with solutions for the task. If you want to user print in console 'Hello World' then you must add  following solutions - [`console.log('Hello World')`, `console.log("Hello World");`...]</li></ul>

**If you want to add new javascript task, you must add above data and general data for the new task**

## **Local storage data structure**
Saving task progress, quiz coins, editor settings and sandbox editor code was achived by localStorage.

**Editor Settings**
* `editorFontSize` - font size for editor (default it depends by device width )
* `editorTheme` - theme for editor (monokai is default)
**Sandbox editor settings**
* `EditorCode` - sandbox editor code
* `editorAreas` - grid areas which are responsible for sandbox editor layout
**Quiz coins**
* `quizCoins` - object (`js`, `html`, `css` keys) with coins for particular quiz 
**Tasks**
**solvedJsTasks, solvedCssTasks, solvedHtmlTasks**
array with task titles which are completed by user.
**htmlTasksSolutions, jsTasksSolutions, cssTasksSolutions**
|key| type| description |
|-|-|-|
|title | string | task title, needed in `get{X}TaskCodeFromLS()` and `get{X}TaskSolutionsFromLS`|
|userCode| string | user's code from task, needed in `get{X}TaskCodeFromLS()` in order to recover code from last session|
|solvedTargets| number array | array with numbers that are completed in specific task, needed in `get{X}TaskTargetsFromLS`|

## Properties
* `codeEditorAreas` - array with available grid areas for the sandbox editor. If you want to add new areas add new element to this array (6x6 grid);
* `CSSData` - data about css -> character source, alt, icon source, alt, description and with the examplary code link
* `JSData` - data about javascript -> character source, alt, icon source, alt, description and with the examplary code link
* `HTMLData` - data about html -> character source, alt, icon source, alt, description and with the examplary code link

## Google firestore operations
* `getSpecificHtmlTask()` - fetch data about specific html task
* `getSpecificCssTask()` - fetch data about specific css task
* `getSpecificJsTask()` - fetch data about specific javascript task
* `getAllTasks()` - get data about all tasks (js, html or css)
* `getQuizQuestions()` - fetch random quiz questions ( 10 questions)

## How task validation for html works?
1. user presses the run button which is responsible for triggering `checkTask()` function which is responsible for task validation
2. first checks for errors in the user's code. If the code contains errors, an information about incorrect syntax is displayed, and if the code has no errors, the task checking begins
3. the code which is passed into iframe window is created -> user can see code result
4. user points (0 at start), and points needed to complete the task are created (depends on task targets amount)
5. using forEach, each task target is checked if it was executed correctly by the user. On each task target element `taskValidationHtml()` function is invoking.

     5.1 - the function is creating code for the particular task target. It is search comments lines with the particular number, and it creates the code without these comments so it can compare user's code if it does this code match one of the solutions

     5.2 -  using forEach, it is checked if the solution matches one of the declared solutions for the task target. If user's code matches, then add new point and change `task.solved` key to true (checkbox will be green), otherwise set this key to false (checkbox will be have red color)

6. After forEach, save task progress into local storage, so when user comes back he will have his task status from last session
7. Check if user has enough points to complete task (compate userPoints to pointsNeeded), if he has then display animation about successfully completed task and save this task title to localStorage (`htmlTasksSolutions`) so user will be know he was completed this task (task link will be have green background color), otherwise if user doesnt have enough points then remove this task from solved task in local storage.

## How task validation for css works?
1. user presses the run button which is responsible for triggering `checkTask()` function which is responsible for task validation
2. first checks for errors in the user's (html and css) code. If the code contains errors, an information about incorrect syntax is displayed, and if the code has no errors, the task checking begins
3. the code which is passed into iframe window is created -> user can see code result
4. user points (0 at start), and points needed to complete the task are created (depends on task targets amount)
5. using forEach, each task target is checked if it was executed correctly by the user. But first at all, check the type of target (html or css). HTML type require changes in .html code, css type require changes in .css code. If the type is html the task task target using `taskValidationHtml()` (described above), if the type is css then invoke `taskValidationCss` on each target ->

   5.1 - create the string which is containg css declarations inside specific selector in order to check if the user has entered all the required styles

   5.2 - create number of required css declarations (`equiredDeclaration`) which are needed to complete the task target , and initialize variable which is holding amount of user's declarations (`userDeclarations`)
   
   5.3 - using forEach check if user code has required styles, if he has then increase `userDeclarations` variable

   5.4 - after forEach check if `userDeclarations` is equal to `equiredDeclaration`, if it is then add new point and change `task.solved` key to true (checkbox will be green), otherwise set this key to false (checkbox will be have red color)

6. After forEach, save task progress into local storage, so when user comes back he will have his task status from last session
7. Check if user has enough points to complete task (compate userPoints to pointsNeeded), if he has then display animation about successfully completed task and save this task title to localStorage (`cssTasksSolutions`) so user will be know he was completed this task (task link will be have green background color), otherwise if user doesnt have enough points then remove this task from solved task in local storage.

## How task validation for js works?
1. user presses the run button which is responsible for triggering `checkTask()` function which is responsible for task validation
2. first checks for errors in the user's code. If the code contains errors, an information about incorrect syntax is displayed, and if the code has no errors, the task checking begins. Sets the `logs` state so that useEffect() will trigger logic behind task validation (It's needed to handle validation by useEffect() hook becouse as we know changing sate is asynchronous operation in react, and the `logs` state is holding necessary data for task validation -> messages from console)
3. useEffect is creating array with console logs, and it is checking if user has write anything in code editor, if he has then start task validation
4. user points (0 at start), and points needed to complete the task are created (depends on task targets amount)
5. using forEach to check if user has executed all task targets (by `taskValidationCss()`)

      5.1 - the function is creating code for the particular task target. It is search comments lines with the particular number, and it creates the code without these comments so it can compare user's code if it does this code match one of the solutions

      5.2 - There are two types of targets, - console and code. If type is equal to 'code' then just check if
       the user's code is matching to one of solutions. If type is console, then check if
       the user's code is matching to one of solutions, and that the console returns the required text. then add new point and change `task.solved` key to true (checkbox will be green), otherwise set this key to false (checkbox will be have red color)

6. After forEach, save task progress into local storage, so when user comes back he will have his task status from last session
7. Check if user has enough points to complete task (compate userPoints to pointsNeeded), if he has then display animation about successfully completed task and save this task title to localStorage (`jsTasksSolutions`) so user will be know he was completed this task (task link will be have green background color), otherwise if user doesnt have enough points then remove this task from solved task in local storage.


## **Components**
**Home page**
* `<HomePage/>` - component which is gathering all content for home page
* `<Hero/>` - subcomponent for `<HomePage/>`, responsible for page introduction
* `<Description/>` - subcomponent for `<HomePage/>`, renders description for every front-end language
* `<ChoseTask/>` - subcomponent for `<HomePage/>` by which user can select tasks
* `<TaskBoard/>` - subbomponent for `<ChoseTask/>` will tasks list
* `<TaskSelectSingle/>` - subcomponent for `<ChoseTask/>`, renders single box with checkbox, by which user can select tasks type
* `<Additions/>` - Subcomponent for `<HomePage/>`, renders menu by which user can choose quiz or code editor
* `<Footer/>` - Subcomponent for `<HomePage/>` - footer for home page


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

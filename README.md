# DOMINO LEARN

This is a project that aims to help beginners get on the path of front end development. The whole website has a space
theme because programming is similar to universe, no one will not know everything all. The application allows you to
explore the whole world of front end development by solving tasks with HTML, CSS or JavaScript. All tasks come from
google Firebase. My application has also code editor which serves as sandbox, and quizzes in HTML, CSS, JavaScript. Each
editor on the page has ability to change font size, theme, and sandbox editor has also ability to change editor layout (
by grid-area). All solutions and code from sandbox editor are saved to local storage. Graphics of the characters were made by me in Gravit Designer program

## Technologies

Project is created with:

* React
* React Router
* Typescript
* Styled-components
* Google Firestore
* [Js-beautify](https://github.com/beautify-web/js-beautify)
* [Console-feed](https://github.com/samdenty/console-feed)
* [Ace Editor](https://ace.c9.io/)
* [React Ace Editor](https://github.com/securingsincity/react-ace)
* [Gravit Designer](https://www.designer.io/en/)

## General data for  tasks

### Task aid

| key | description |
| --- | ---| 
| author | the name of the author, or the website of aid for the task | 
| link | link to this page | 
| title | title for aid | 
| type | video or article, there are two different, there are two color versions that are rendered by the component `TaskAid` |

### HTML target data

| key | description | 
| --- | --- |
| number | The number for which the function will look for a comment with that number. For example, for number 5 the function will look for the comment `<!-- Place your code for task 5 below --> (user code) <!--5-->`, and based on that it will cut the user code and check if it is correct.|
| solution |  Solution for the task, needed for the function to check if the user code is the same. |
| solved | A null value, based on its checkbox color will be green or red, the `checkTask` function will change this value to true if the user code is valid or false if it is not  | 
| target | This is the html code that serves as the text to tell it what to do.|

### CSS target data

| key | description |
| --- | --- |
| declarations | An array of CSS declarations that must be in the user code for a particular selector.|
| number | target number | 
| selector | A css selector (e.g. #example) on the basis of which the `checkTask` function will cut the code with the declarations between the brackets of this selector.  |
| solved | A null value, based on its checkbox color will be green or red, the `checkTask` function will change this value to true if the user code is valid or false if it is not  | 
| target | This is the html code that serves as the text to tell it what to do.|
| type | only "css", the `checkTask` function will know how to check a css or html task, because some tasks may require interference with the html code. |

### JavaScript target data

| key | description | 
| --- | --- |
| number | The number for which the function will look for a comment with that number. For example, for number 5 the function will look for the comment `/* Place your code for task 1 below */ (user code) /* 1 */`, and based on that it will cut the user code and check if it is correct.|
| solutions | An array of solutions that will be used to check if a user's code matches one in this array. For a simple "Hello World" display, there are many approaches, so there is an array for that. It must look like this ` ["console.log("Hello World"); ", "console.log('Hello World'); ", "console.log("hello world") "]`.|
| solved | A null value, based on its checkbox color will be green or red, the `checkTask` function will change this value to true if the user code is valid or false if it is not  | 
| target | This is the html code that serves as the text to tell it what to do.|
| console | Value to be displayed in the console, checked only if target type is `console`.|
| type | If you want the user to write something to the console you must set the `console` value, if you want the user to write the code you must  set the `code` value.|

## How to add a new html task

In firestore in htmlTasks collection add new document with following data.

| key | Description |
| --- | --- |
| title | Title for the task |
| number | Task number by which the task will be retrieved from the firestore |
| code | the initial code for the task, it must contain comments in order for the `checkTask` function to find the user's solution for the target. The comment must look like this `<!-- Place your code for task 1 below --> (here the user enters their code) .... <!--1-->`|
| introduction | html code which is an introduction to the task |
| aid | array with [task aid](#task-aid) objects|
| targets |  array with [Html target](#html-target) objects |

## How to add a new css task

In firestore in cssTasks collection add new document with following data.

| key | Description |
| --- | --- |
| title | Title for the task |
| number | Task number by which the task will be retrieved from the firestore |
| code | this is an object with two keys html (must be the same as html task code) and css(normal css code without comments) that represent the initial code for the task|
| introduction | html code which is an introduction to the task |
| aid | array with [task aid](#task-aid) objects|
| targets |  array with [HTML target](#html-target) or [CSS target](#css-target)  objects, !!!! HTML targets must have an additional key `type : "html"`. !!!!! |

## How to add a new JavaScript task

In firestore in jsTasks collection add new document with following data.

| key | Description |
| --- | --- |
| title | Title for the task |
| number | Task number by which the task will be retrieved from the firestore |
| code | the initial code for the task, it must contain comments in order for the `checkTask` function to find the user's solution for the target. The comment must look like this `/* Place your code for task 1 below */ @@@@@@@@@@ /* 1 */`, must contain @ signs, because Js-beautify module doesn't support formatting for comments and you have to do it manually while downloading the task (they will be removed and the space between comments will be created)  |
| introduction | html code which is an introduction to the task |
| aid | array with [task aid](#task-aid) objects|
| targets |  array with [JavaScript target](#javascript-target) objects |

## How to add new question for quiz

In the `quiz` collection in firestore there are 3 documents each with its own type - html, js, css. If you want to add
new questions you have to add new object to the questions array with the following data.

| item | description |
| --- | --- |
| coins | number of coins, which can be added to user account |
| question | question which will be displayed |
| answers | array with objects, each must must have  `text` as string and `correct` ass boolean |  

## Checking tasks

### HTML

A `checkTask` function has been written in the `HtmlContent` component. Which is responsible for all the logic when the
user presses the "run" button. There is a nested `taskValidationHtml` function that checks if the user code snippet is
valid and if the target it refers to can be passed. Here is how the whole `checkTask` function works:

* 1 - When the run button has been pressed, the `checkTask` starts.
* 2 - If there are no errors in the user code, the task checking starts, if it has an error the component state is
  changed and error is displayed.
* 3 - srcDoc state is set, so that he is passed into iframe window and user can see the result of his code.
* 4 - Points required to complete the task and the user's points are created.
* 5 - A forEach is implemented on the array with targets. The `taskValidationHtml` function is executed on each element.
    * 5.1 - 2 variables containing comment locations are created, from which it will be able to get clean html code
      without comments and check user solution
    * 5.2 - user code with lower case (without task comments and spaces) is created.
    * 5.3 - task solution with lower case (without task comments and spaces) is created.
    * 5.4 - Athe the end function checks if the user code is equal to the one specified in the target. If it is the
      state of the target is changed so that the checkbox color is green, and points are added for a correct solution.
      If not, the checkbox is red.

* 6 - saves the user code in local storage, so when the user returns, he will have his solution
* 7 - When the ` taskValidationHtml` function adds the points, check if the number of user points is equal to the
  required. If it is, the task is passed, the state of the component changes and a screen informing that the task is
  solved is displayed, and the task is saved to local storage as solved, so that the user knows which task he or she has
  successfully completed when choosing a task.

### CSS

A `checkTask` function has been written in the `CssContent` component. Which is responsible for all the logic when the
user presses the "run" button. There is a nested `taskValidationCss` function that checks if the user code snippet is
valid and if the target it refers to can be passed. Here is how the whole `checkTask` function works:

* 1 - When the run button has been pressed, the `checkTask` starts.
* 2 - If there are no errors in the user code, the task checking starts, if it has an error the component state is
  changed and error is displayed.
* 3 - srcDoc state is change, so that he is passed into iframe window and user can see the result of his code.
* 4 - Points required to complete the task and the user's points are created.
* 5 - The forEach is implemented on an array of targets. The type of the target is checked. If it is equal to html,
  the `taskValidationHtml` function described above is fired. This is done because some tasks may require interference
  with the html code. If the type is css, the ``taskValidationCss` function is executed. Its logic looks like this:
    * 5.1 - locations from which a string with style statements will be extracted are created.
    * 5.2 - task solution with lower case (without task comments and spaces) is created.
    * 5.3 - A variable that holds the number of required css declarations that must be included in the user code is
      created.
    * 5.4 - A variable that holds the number of with css declarations from user code is created . It is equal to 0.
    * 5.5 - forEach is implemented on declarations from the target.
    * 5.6 - forEach on every element checks if the required css declaration is included in the user's cut code, if it
      has then 1 point is added to the user's declaration.
    * 5.7 - At the end checks if the number of user declarations is equal to the required number. If it is, add point
      and set checkbox color to green, if it is not set to red
* 6 - saves the user code in local storage, so when the user returns, he will have his solution
* 7 - When the ` taskValidationCss` function adds the points, check if the number of user points is equal to the
  required. If it is, the task is passed, the state of the component changes and a screen informing that the task is
  solved is displayed, and the task is saved to local storage as solved, so that the user knows which task he or she has
  successfully completed when choosing a task.
  
### JavaScript

A `checkTask` function has been written in the `jsContent` component. Which is responsible for all the logic when the
user presses the "run" button. There is a nested `taskValidationJs` function that checks if the user code snippet is
valid and if the target it refers to can be passed. Here is how the whole `checkTask` function works:

* 1 - When the run button has been pressed, the `checkTask` starts.
* 2 - If there are no errors in the user code, the task checking starts, if it has an error the component state is
  changed and error is displayed.
* 3 - User code is formatted.
* 4 - The `logs` state is reset so that the console does not display duplicates.
* 5 - `Logs` function convert user code to ready to display in the console. (The rest of the logic responsible for the console is in the hook).
* 6 -  Points required to complete the task and the user's points are created.
* 7 - forEach is implemented on task targets, and for each item it executes a `taskValidationJs` function that checks that each required target has been solved correctly.
      * 7.1 - 2 variables containing comment locations are created, from which it will be able to get clean js code
          without comments and check user solution
      * 7.2 - user code with lower case (without task comments and spaces) is created.
      * 7.3 - array of possible solutions is created
      * 7.4 - function checks if the user code is equal to any of the solutions in the array
      * 7.5 - If yes, add point and change color of checkbox to green, if no change color to red
 
* 8 - saves the user code in local storage, so when the user returns, he will have his solution
* 7 - When the ` taskValidationJs` function adds the points, check if the number of user points is equal to the
  required. If it is, the task is passed, the state of the component changes and a screen informing that the task is
  solved is displayed, and the task is saved to local storage as solved, so that the user knows which task he or she has
  successfully completed when choosing a task.     

  
## Components

### Sandbox code editor

* `CodeEditor` - wraps all content and contains settings for the editor
* `CodeEditorHeader` - Component which is includes header for sandbox editor, also there is form by which the user can
  use to change the editor settings
* `CodeEditorContent` - responsible for the editor, there are two versions - for mobile devices (below 900px window
  width)
  and for larger devices (above 900px).

### Css task

* `CssTask` - wraps all content for task and contain task data.
* `CssTaskContent` - Component with the main content for css task -> targets, introduction, editor.
* `CssFooter` - Footer which contains the number of the current task, lists with tasks.

### Html task

* `HtmlTask` - wraps all content for task and contain task data.
* `HtmlContent` - Component with the main content for css task -> targets, introduction, editor.
* `HtmlFooter` - Footer which contains the number of the current task, lists with tasks.

### JavaScript task

* `JsTask` - wraps all content for task and contain task data.
* `JsTaskContent` - Component with the main content for css task -> targets, introduction, console.
* `JsFooter` - Footer which contains the number of the current task, lists with tasks.

### Quiz

* `QuizMenu` - menu by which the user can select the quiz.
* `Quiz` - wraps all content for quiz, holds quiz questions data.
* `QuizQuestion` - single question for a quiz.
* `QuizSummary` quiz summary - gained coins, all coins, correct answers.

### General for tasks

* `TaskAceEditorSettings` - allows to change editor settings.
* `TaskAid` - link to a page that helps the user solve the task,there are two color types depending on the type.
* `TaskIntroduction` - introduction for task.
* `TaskResultLoading` - loading screen, displaying when checking the task.
* `TaskResultWindo` - browser window in which there is an iframe with the user code.
* `TaskTargets` - task aids, and targets.

### Home page

* `HomePage` - wraps all content.
* `Navigation` - navigation, title and links list.
* `Hero` - responsible for user introduction ,renders a character that represents the author of the page, and the title
  along with a graphic of the monitor and the astronaut.
* `Description` - description for every language.
    * `DescriptionItem` - description for a single language and sample code.

* `ChoseTask` - component by which user can select tasks.
    * `TasksBoard` - renders animated text, or a list with tasks selected by the user.
    * `TaskSelectSingle` - single box with checkbox, whose change will retrieve jobs from a specific category.

* `Additions` - menu by which user can choose quiz or code editor.
* `footer` - freepik icons authors, and socials links.

### Other

* `Error404` - responsible for 404 error handling and redirecting the user to a specific page after 10s.
* `Loading` - loading screen with astronaut :).
* `RouterScrollToTop` - allows for scrolling to the top of the page.

## Local storage functions

### For editor

* `getEditorFSize` - get editor font size from local storage
* `getEditorTheme` - get editor theme from local storage, it not exist return default theme - monokai

### Save the solution to the task for a specific language (e.g. html) so that when the user returns to this task, he will have its solution

* `saveHtmlTaskSolutionToLS`
* `saveCssTaskSolutionToLS`
* `saveJsTaskSolutionToLS`

### Get task targets - information about which task has been completed (color in checkbox will be red or green)

* `getHtmlTaskTargetsFromLS`
* `getCssTaskTargetsFromLS`
* `getJsTaskTargetsFromLS`

### Get user's solution code for task

* `getHtmlTaskCodeFromLS`
* `getCssTaskCodeFromLS`
* `getJsTaskCodeFromLS`

### General for task

* ` saveSolvedTaskToLS ` - save solved task title to ls, so that the user knows which tasks he has completed
* `checkSolvedTask` - check if the task has been solved correctly

### For sandbox editor

* `saveEditorCodeToLS` - save user code to local storage so that when he comes back he has his code from the previous
  session
* `getEditorAreas` - get editor areas from local storage

### For quiz

* `saveQuizCoinsToLS` - save gained quiz coins into local storage
* `getQuizCoins` - get quiz coins

## Firebase operations

* getSpecificHtmlTask - fetch specific html task
* getSpecificCssTask - fetch specific css task
* getSpecificJsTask - fetch specific js task
* getAllTasks - fetch all tasks
* getQuizQuestions - fetch random quiz questions (max 10 questions)

## How to get language information

There are three objects `htmlClass`, `cssClass`, `jsClass`. They have been opened with the `ProgrammingLanguage`
constructor and contain the following data

* name of language
* icon source
* icon alt
* figure source
* figure alt
* exemplary code
* description

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

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

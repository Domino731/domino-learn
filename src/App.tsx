import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import {HomePage} from "./components/homePage/homePage";
import {HtmlTask} from "./components/htmlTask/HtmlTask";
import {CssTask} from "./components/cssTask/CssTask";
import {JsTask} from "./components/jsTask/JsTask";
import {QuizMenu} from "./components/quiz/QuizMenu";
import {CodeEditor} from "./components/CodeEditor/CodeEditor";
import {Quiz} from "./components/quiz/Quiz";
import {RouterScrollToTop} from "./components/other/RouterScrollToTop";
import {Loading} from "./components/other/Loading";
function App() {
    return (
        <Router>
            <RouterScrollToTop/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/test" component={Loading}/>
            <Route path="/html-task/:taskNumber" component={HtmlTask}/>
            <Route path="/css-task/:taskNumber" component={CssTask}/>
            <Route path="/js-task/:taskNumber" component={JsTask}/>
            <Route path="/code-editor" component={CodeEditor}/>
            <Route path="/quiz-menu" component={QuizMenu}/>
            <Route path="/quiz/:item" component={Quiz}/>
        </Router>
    );
}

export default App;

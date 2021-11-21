import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Route} from "react-router";
import {HomePage} from "./components/homePage/homePage";
import {HtmlTask} from "./components/htmlTask/HtmlTask";
import {JsTask} from "./components/jsTask/JsTask";
import {QuizMenu} from "./components/quiz/QuizMenu";
import {CodeEditor} from "./components/CodeEditor/CodeEditor";
import {Quiz} from "./components/quiz/Quiz";
import {RouterScrollToTop} from "./components/other/RouterScrollToTop";
import { Error404 } from './components/other/Error404';
import { CSSTask } from './components/cssTask/CssTask';

function App() {
    return (
        <Router>
            <RouterScrollToTop/>
            <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route  path="/html-task/:taskNumber" component={HtmlTask}/>
            <Route  path="/css-task/:taskNumber" component={CSSTask}/>
            <Route  path="/js-task/:taskNumber" component={JsTask}/>
            <Route path="/code-editor" component={CodeEditor}/>
            <Route  path="/quiz-menu" component={QuizMenu}/>
            <Route  path="/quiz/:quizType" component={Quiz}/>
            <Route component={() => <Error404 redirectPath='/'/>} />
            </Switch>
        </Router>
    );
}

export default App;

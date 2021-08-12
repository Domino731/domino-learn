import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import {HomePage} from "./components/homePage/homePage";
import {HtmlTask} from "./components/htmlTask/HtmlTask";
import {CssTask} from "./components/cssTask/CssTask";

function App() {
    return (
        <Router>
            <Route exact path="/" component={HomePage}/>
            <Route path="/html-task/:taskNumber" component={HtmlTask}/>
            <Route path="/css-task/:taskNumber" component={CssTask}/>
        </Router>
    );
}

export default App;

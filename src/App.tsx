import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import {HomePage} from "./components/homePage/homePage";
import {HtmlTask} from "./components/htmlTask/HtmlTask";

function App() {
  return (
      <Router>
        <Route exact path="/" component={HomePage}/>
          <Route path="/html-task/:id" component={HtmlTask}/>
      </Router>
  );
}

export default App;

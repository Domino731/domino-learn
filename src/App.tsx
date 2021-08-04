import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import {HomePage} from "./components/homePage/homePage";

function App() {
  return (
      <Router>
        <Route exact path="/" component={HomePage}/>
      </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Quiz from "./Quiz";
import Questions from './Questions'
import AddQuiz from './AddQuiz'
import Home from './Home'
//import {Provider} from "react-redux";
//import store from "./redux/store";

function App() {
  return (
    <div>
      <Router>
          <Switch>
              
                  <Route path={'/'} exact component={Home}/>
                  <Route path={'/quiz'} exact component={Quiz}/>
                  <Route path={'/questionpage'} exact component={Questions}/>     
                  <Route path={'/addquiz'} exact component={AddQuiz}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

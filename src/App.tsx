import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from './frames';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Pages.Home} />
        <Route path="/quiz" exact component={Pages.Quiz} />
        <Route path="/answers" exact component={Pages.Submissions} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

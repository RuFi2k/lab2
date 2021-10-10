import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Suspense fallback={"Завантаження..."}>
      <Router>
        <Switch>
          <Route path="/" exact component={React.lazy(() => import('./frames/home'))} />
          <Route path="/quiz" exact component={React.lazy(() => import('./frames/quiz'))} />
          <Route path="/quiz/people" exact component={React.lazy(() => import('./frames/quiz-people'))} />
          <Route path="/answers" exact component={React.lazy(() => import('./frames/submissions'))} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;

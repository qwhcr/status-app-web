import React from 'react';
import Main from './Main/Main';
import Join from './Join/Join';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/main" component={Main} />
    </Router>
  );
}

export default App;

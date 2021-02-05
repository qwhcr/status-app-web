import React, { Component } from 'react';
//import './App.css';
import { Button } from 'antd'
import { Col, Row } from 'antd';
import axios from 'axios'
import TimeAgo from 'react-timeago'
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

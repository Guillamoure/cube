import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './style/app.scss'

import Home from './components/home'
import Game from './containers/game'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game/:id" component={Game} />
      </Switch>
    </Router>
  );
}

export default App;

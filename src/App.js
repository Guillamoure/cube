import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style/app.scss'
import './style/board.scss'
import { useSelector } from 'react-redux'

import Home from './components/home'
import Game from './containers/game'

import CardModal from './modals/card'

function App() {

const modalKind = useSelector(state => state.modalReducers.kind)

  return (
    <Router>
      {modalKind === "card" && <CardModal />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game/:id" component={Game} />
      </Switch>
    </Router>
  );
}

export default App;

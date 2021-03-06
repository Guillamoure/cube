import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style/app.scss'
import './style/board.scss'
import './style/modal.scss'
import { useSelector } from 'react-redux'

import NavBar from './containers/navbar'
import Home from './containers/home'
import Signin from './components/signin'
import Game from './containers/game'
import WaitingRoom from './containers/waiting_room'
import Libraries from './containers/player-libraries/libraries'
import NewLibrary from './containers/player-libraries/new-library'
import Cards from './containers/explore_cards'

import ModalDistributer from './modals/modal_distributer'

function App() {

const modalKind = useSelector(state => state.modalReducers.kind)

  return (
    <Router>
      {modalKind && <ModalDistributer />}
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/game/:id" component={Game} />
        <Route exact path="/waiting_room" component={WaitingRoom} />
        <Route exact path="/libraries" component={Libraries} />
        <Route exact path="/new-library" component={NewLibrary} />
        <Route exact path="/cards" component={Cards} />
      </Switch>
    </Router>
  );
}

export default App;

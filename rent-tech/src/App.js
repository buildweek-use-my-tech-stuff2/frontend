import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route } from 'react-router-dom'
import {NavBar} from './Components/NavBar'

function App() {
  return (
    <div className='App'>
      <NavBar />
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component = {Signup} />
    </Switch>
    </div>
  )
}

export default App;

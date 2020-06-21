import React from 'react';
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route } from 'react-router-dom'
import {NavBar} from './Components/NavBar'
import styled from "styled-components";
import {PrivateRoute} from './utils/PrivateRoute';
import ItemList from '../src/Components/ItemList'


const Header = styled.h1`
font-size: 120px;
margin-top: 10px;
`;

const App = () => {
  return (
    <div className='App'>
      <NavBar />
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component = {Signup} />

      <PrivateRoute path='/dashboard' component={ItemList} />
    </Switch>
    </div>
  )
}

export default App;

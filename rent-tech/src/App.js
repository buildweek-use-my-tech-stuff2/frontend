import React from 'react';
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route } from 'react-router-dom'
import {NavBar} from './Components/NavBar'
import styled from "styled-components";
import {PrivateRoute} from './utils/PrivateRoute';
import ItemList from '../src/Components/ItemList'
import Lenders from '../src/Components/Lenders';
import DummyData from './Components/DummyData';
import ProductCard from './Components/ProductCard';
import RentTech from './img/RentTech.png'


const Header = styled.h1`
font-size: 120px;
margin-top: 10px;
`;

const App = () => {
  const [products, setProducts] = useState(DummyData);
  return (
    <div className='App'>
      <NavBar />
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component = {Signup} />
    
      <PrivateRoute
      path="/lenders"
      render={props => (
        <Lenders dummyData = {DummyData} />
      )}/>

      <PrivateRoute
      path="/product/:itemId"
      render={props => (
        <ProductCard items = {products} />
      )}/>
      
      <PrivateRoute path='/dashboard' component={ItemList} />
    </Switch>
    </div>
  )
}


export default App;

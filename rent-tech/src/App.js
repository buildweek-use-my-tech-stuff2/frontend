import React, {useState} from 'react';
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route } from 'react-router-dom'
import {NavBar} from './Components/NavBar'
import styled from "styled-components";
import {PrivateRoute} from './utils/PrivateRoute';
import ItemList from '../src/Components/ItemList';
import Lenders from '../src/Components/Lenders';
import DummyData from './Components/DummyData';
import ProductCard from './Components/ProductCard';
import RentTech from './img/RentTech.png'
import { axiosWithAuth } from './utils/axiosWithAuth';
import UpdateItem from './Components/UpdateItem'
import Item from './Item'
import {AddItem} from './Components/AddItem' 

// const Header = styled.h1`
// font-size: 120px;
// margin-top: 10px;
// `;

const App = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    role: null
  })
  const [products, setProducts] = useState(DummyData);
  const [items, setItems] = useState([])

  const getItemsList = () => {
    axiosWithAuth()
      .get('/api/items')
      .then(res => {
        console.log(res.data);
        setItems(res.data)})
      .catch(err => console.log(err))
      
  }
  
  return (
    <div className='App'>
      <NavBar />
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component = {Signup} />
    
      {/* <PrivateRoute
      path="/listings"
      render={props => (
        <ItemList dummyData = {DummyData} />
      )}/> */}

      <PrivateRoute
      path="/items/:id"
      render={props => {
        return <Item {...props} getItemsList={getItemsList} items = {items} />
      }}/>
      <PrivateRoute path='/dashboard'>
        <AddItem />
      </PrivateRoute> 
      
      <PrivateRoute path='/listings'> 
        <ItemList  getItemsList={getItemsList}/>
      </PrivateRoute>
      <PrivateRoute path='/update-item/id' render= {props => (<UpdateItem {...props} items={items} setItems={setItems} getItemsList={getItemsList} />)} />
      {/* <PrivateRoute path='/items/:id' render={props => {
        return <Item {...props} />
      }} /> */}
    </Switch>
    </div>
  )
}


export default App;

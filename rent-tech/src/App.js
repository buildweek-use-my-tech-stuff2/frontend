import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route, Link } from 'react-router-dom'
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
import Form from '../src/Components/Form';

import { UserContext } from './contexts/UserContext'
import { ItemContext } from './contexts/ItemContext'

const Header = styled.h1`


  box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.75);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%) #989898;
  background-blend-mode: multiply,multiply;
  height: 100px;

`;

const App = () => {
  const [user, setUser] = useState({
    credentials: {
      username: '',
      password: '',
      role: null
    }
  })

  const [items, setItems] = useState([])
  const [products, setProducts] = useState({
    name: '',
    image_url: '',
    price: '',
    description: '',
    location: '',
    deposit: '',
    renter: '',
    type: ''
  })
  useEffect(()=> {
    axiosWithAuth()
      .get('/api/items')
      .then(res => {
        console.log('data', res.data);
        setItems(res.data)})
      .catch(err => console.log(err))

  }, [])
      

  
  console.log(items)
  
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='App'>

      {/* <Header>
      <Link to="/"><img src={RentTech} style = {{marginTop:'-68px'}} width="100" height="100"/></Link>
      
      </Header> */}

      <UserContext.Provider value= {{user, setUser}}>
        <ItemContext.Provider value = {{items, setItems, isLoading, setIsLoading, products, setProducts}}>
      <NavBar />
    <Switch>
      
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component = {Signup} />
      <Route exact path='/form' component = {Form} />
    
      {/* <PrivateRoute
      path="/listings"
      render={props => (
        <ItemList dummyData = {DummyData} />
      )}/> */}
      <PrivateRoute path='/dashboard'>
        <AddItem />
      </PrivateRoute> 
      
      <PrivateRoute path='/listings'> 
        <ItemList />
      </PrivateRoute>
      {/* <PrivateRoute path='/items/:id' render={props => {
        return <Item {...props} />
      }} /> */}

       <PrivateRoute path='/rentals'> 
        <Lenders />
      </PrivateRoute>
      <Route path='/items/:itemID'> 
        <Item/>
      </Route>

    </Switch>
    </ItemContext.Provider>
    </UserContext.Provider>
    </div>
  )
}


export default App;

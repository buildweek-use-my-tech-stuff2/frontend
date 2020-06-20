import React, {useState} from 'react';
import './App.css';
import Lenders from '../src/Components/Lenders';
import DummyData from './Components/DummyData';
import { Route, Link } from "react-router-dom";
import ProductCard from './Components/ProductCard';




function App() {

 const [products, setProducts] = useState(DummyData);

  return (
    <div className="App">

      <Link to = '/'>
      <button>Home</button>
      </Link>

      <Route exact path = '/'>
      <Lenders dummyData = {DummyData}/>
      </Route>
 
   
      <Route
      path="/product/:itemId"
      render={props => (
        <ProductCard items = {products} />
      )}/>

     </div>
  );
};

export default App;

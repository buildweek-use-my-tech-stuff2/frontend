import React from 'react';
import './App.css';
import styled from "styled-components";
import ItemList from "./components/ItemList";
import Form from "./components/Form"; 
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import * as yup from "yup";

const Header = styled.h1`
font-size: 120px;
margin-top: 10px;
`;

const App = () => {
  return (
    <div className="App">
      <Header>Items for Rent</Header>
      <Form />
    </div>
  );
};

export default App;

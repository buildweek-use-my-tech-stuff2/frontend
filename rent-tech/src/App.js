import React from 'react';
import './App.css';
import ItemList from "./components/ItemList";
import styled from "styled-components";

const Header = styled.h1`
font-size: 120px;
margin-top: 10px;
`;

const App = () => {
  return (
    <div className="App">
      <Header>Items for Rent</Header>
      <ItemList />
    </div>
  );
};

export default App;

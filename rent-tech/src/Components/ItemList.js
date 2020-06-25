import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import ItemCard from "./ItemCard.js";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import UpdateItem from './UpdateItem'

const ItemStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ItemList = ({items}) => {
  const [rentItem, setRentItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
 
    axiosWithAuth()
      .get("/api/items")
      .then(res => {
        console.log(res.data);
        setRentItem(res.data)
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [items]);

  return (
    <ItemStyle>
      {isLoading && <h3>items are on their way...</h3>}
      {rentItem.map(item => (
          
            <ItemCard key={item.id}item={item}/>
          
      ))}
    </ItemStyle>
  );
};

export default ItemList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import ItemCard from "./ItemCard.js";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const ItemStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ItemList = () => {
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
  }, []);

  return (
    <ItemStyle>
      {isLoading && <h3>items are on their way...</h3>}
      {rentItem.map(item => (
        <ItemCard item={item} key={item.id} rentItem={rentItem}/>
      ))}
    </ItemStyle>
  );
};

export default ItemList;
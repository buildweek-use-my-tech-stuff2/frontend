import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import ItemCard from "./ItemCard.js";

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
 
    axios
      .get("https://swapi.py4e.com/api/people/?page2")
      .then(res => {
        console.log(res.data.results);
        setRentItem(res.data.results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ItemStyle>
      {isLoading && <h3>items are on their way...</h3>}
      {rentItem.map(item => (
        <ItemCard item={item} key={item.name} />
      ))}
    </ItemStyle>
  );
};

export default ItemList;

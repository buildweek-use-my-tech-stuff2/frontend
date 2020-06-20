import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from 'react-router-dom'



const ContentWrapper = styled.div`
  border: 2px solid;
  width: 20%;
  background-color:#ECECEC;
  margin-bottom: 30px;
`;

const ItemCard = props => {
  // console.log(props.rentItem)

  // const itemMap = props.rentItem.map(array => {
  //   return array;
  // })
  // console.log(itemMap)

  const params= useParams();
  const id = params.itemId
  const [item, setItem] = useState({
    name: '',
    image_url: '',
    price: '',
    description: '',
    location: '',
    type: '',
    deposit: '',
    renter: ''
  })

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/items`)
      .then(res => {
        console.log(res.data)
        setItem(res.data.name)

      })
  }, [])
  return (
    <ContentWrapper>
      <h2>Name:</h2>
      <h2>IMAGE HERE</h2>
      <h4>PRICE:</h4>
      <h4>DESCRIPTION:</h4>
      <h4>LOCATION:</h4>
      <h4>TYPE:</h4>
      <h4>DEPOSIT:</h4>
      <h4>RENTER:</h4>

    </ContentWrapper>
  );
};

export default ItemCard;
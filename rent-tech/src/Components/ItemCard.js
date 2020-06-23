import React from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ContentWrapper = styled.div`
  border: 2px solid;
  width: 20%;
  background-color:#ECECEC;
  margin-bottom: 30px;
  display: flex,
  flex-direction: column,
  
  
`;

const Image = styled.img`
  height: 100px
  `

const ItemCard = ({ item }) => {

  const { name, image_url, price, description, location, type, deposit, renter} = item;

  return (
    <ContentWrapper>
      <h2>{name}</h2>
      <Image src={image_url} />
      <h4>Price to Rent:  {price}</h4>
      <h4>Description:  {description}</h4>
      <h4>Location:   {location}</h4>
      <h4>{type}</h4>
{      <h4>Deposit:   {deposit}:</h4>
}      <h4>Lender:    {renter}</h4>

    </ContentWrapper>
  );
};

export default ItemCard;
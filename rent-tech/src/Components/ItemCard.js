import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  border: 2px solid;
  width: 20%;
  background-color:#ECECEC;
  margin-bottom: 30px;
`;

const ItemCard = props => {
  return (
    <ContentWrapper>
      <h2>NAME:</h2>
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
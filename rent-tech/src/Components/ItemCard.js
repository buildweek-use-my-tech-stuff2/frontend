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
      <h2>IMAGE HERE</h2>
      <h2>TYPE:</h2>
      <h4>PRICE:</h4>
      <h4>LOCATION:</h4>
      <h4>AVAILABILITY:</h4>
      <h4>DESCRIPTION:</h4>
    </ContentWrapper>
  );
};

export default ItemCard;
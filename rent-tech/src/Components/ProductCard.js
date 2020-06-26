import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';
import styled from 'styled-components'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Switch, Route, Link } from 'react-router-dom'



const StyledCard = styled.div`

  display: flex;
  align-items: flex-start;
  margin-top: 36px;
  color: #5b5656;
  margin: 0 20%;
  border: 4px solid #38cfb1;
  padding: 10px;
  background-color: #5b5656;
  border-radius: 10px;

    
    
    
`;

const StyledText = styled.p`

  text-align: left;
  color: #ececec;
  font-family: 'Montserrat', sans-serif;

`

const StyledPrice = styled.p`

  color: #f2a365;
  text-align: left;
  font-weight: bold;

`
const TheButton = styled.button`
      
  top: 10px;
  right: 10px;
  font-size: 15px;
  padding: 5px 20px;
  color: #ececec;
  border: 3px solid #4D4646;
  border-radius: 20px;
  width: auto;
  background-color: #38cfb1;
  z-index: 100;
  font-weight: bold;


  :hover {
  box-shadow: inset 0 0 10px #000000;
  cursor: pointer;
  color: #f2a365;

`
const StyledImg = styled.img`

  width: 50%;
  border: 4px solid #f2a365;
  
`

const StyledSpan = styled.span`

  color: #f2a365;

`


const ProductCard = (props) => {

  const [rentItem, setRentItem] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/items")
      .then(res => {
        console.log('data from Lender', res.data);
        setRentItem(res.data)
      })
      .catch(error => console.log(error));
  }, []);

    const { dataID } = useParams().itemID;
    console.log('use params thingy', dataID);

    const { itemID } = useParams();

    const shopItem = rentItem.find(item => item.id === Number(itemID));
    
    return (
     

      <Link>      
        <div>
             <StyledCard>
              <StyledImg src={shopItem.image_url} alt="Card image cap" />
              <CardBody>
                {/* <CardTitle> </CardTitle> */}
                <StyledText>Product : {shopItem.name}</StyledText>
                <StyledText>Location : {shopItem.location}</StyledText>
                <StyledText>Renter : {shopItem.renter}</StyledText>
                <StyledText>Type : {shopItem.type}</StyledText>
                <StyledText>Product Id : {shopItem.id}</StyledText>
                <StyledText>Description : {shopItem.description}</StyledText>
                <StyledPrice>Desposit : {shopItem.deposit}</StyledPrice>
                <StyledPrice><StyledSpan>Price :</StyledSpan> {shopItem.price}</StyledPrice>
                <TheButton>Rent</TheButton>
              </CardBody>
            </StyledCard>

            
        </div>
        </Link>
      
       

    )
};


export default ProductCard;
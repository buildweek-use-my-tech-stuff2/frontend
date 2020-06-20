import React from 'react';
import {useParams} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';
import styled from 'styled-components'


const StyledCard = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 36px;
    color: #5b5656;
    margin: 0 20%;
    
    
    
`;

const StyledText = styled.p`
    text-align: left;
    color: #4d4646;
`

const StyledPrice = styled.p`
    color: red;
    text-align: left;
`
const TheButton = styled.button`
    
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #4d4646;
    border-radius: 3px;
    color: #ececec;
    background-color: #f2a365;  
`
const StyledImg = styled.img`
  width: 50%;
  

`

const ProductCard = (props) => {

    const itemId = useParams().itemId;

    const shopItem = props.items.find(item => item.id === Number(itemId));
    
    return (
        <div>
             <StyledCard>
              <StyledImg src={shopItem.image_url} alt="Card image cap" />
              <CardBody>
                {/* <CardTitle> </CardTitle> */}
                <StyledText>{shopItem.name}</StyledText>
                <StyledText>{shopItem.location}</StyledText>
                <StyledText>{shopItem.renter}</StyledText>
                <StyledText>{shopItem.type}</StyledText>
                <StyledText>{shopItem.id}</StyledText>
                <StyledText>{shopItem.description}</StyledText>
                <StyledText>{shopItem.location}</StyledText>
                <StyledPrice>{`$ ${shopItem.price}`}</StyledPrice>
                <TheButton>Rent</TheButton>
              </CardBody>
            </StyledCard>
        </div>
      
      
       

    )
};


export default ProductCard;
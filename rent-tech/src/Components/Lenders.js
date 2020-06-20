import React from 'react';
import styled from 'styled-components'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';
import { Link } from "react-router-dom"; 

 

const StyledCard = styled.div`
    margin-top: 36px;
    color: #5b5656;
    

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

const Lenders = (props) => {
  console.log(props);
    return (
  <div> 
    <Row style= {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
    {props.dummyData.map(data => {
      return (
      <Link to={`/product/${data.id}`}>
        
          <Col>
            <StyledCard>
              <CardImg top width="100%" src={data.image_url} alt="Card image cap" />
              <CardBody>
                <CardTitle> </CardTitle>
                <StyledText>{data.name}</StyledText>
                <StyledPrice>{`$ ${data.price}`}</StyledPrice>
                <TheButton>Rent</TheButton>
              </CardBody>
            </StyledCard>
          </Col>
      
      </Link>
      )
    })}
   </Row>
    
  </div>

  

  
  );
    
};

export default Lenders;
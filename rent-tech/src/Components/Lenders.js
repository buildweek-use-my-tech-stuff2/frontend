import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {
    CardBody,
    CardTitle, Row, Col
  } from 'reactstrap';
import { Link } from "react-router-dom"; 
import { axiosWithAuth } from "../utils/axiosWithAuth.js";


 

const StyledCard = styled.div`

  margin-top: 36px;
  color: #5b5656;
  border: 3px solid #38cfb1;
  padding: 10px;
  width: 300px;
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
  }
    
`

const StyledImg = styled.img`

  height: 250px;
  border: 4px solid #f2a365;
  
`

const StyledSpan = styled.span`

  color: #f2a365;
`

const Lenders = (props) => {

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

    return (
  <div> 
    <Row style= {{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
    {rentItem.map(data => {
      return (
      <Link to={`/items/${data.id}`}>
        
        <Col>
            <StyledCard>
              <StyledImg top width="100%" src={data.image_url} alt="Card image cap" />
              <CardBody>
                <CardTitle> </CardTitle>
                <StyledText>{data.name}</StyledText>
                <StyledText>Renter : {data.renter}</StyledText>
                {/* <StyledText>{data.type}</StyledText> */}
                <StyledPrice><StyledSpan>Price :</StyledSpan> {data.price}</StyledPrice>
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
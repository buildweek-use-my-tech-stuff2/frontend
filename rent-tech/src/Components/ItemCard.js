import React, {useState} from "react";
import styled from "styled-components";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import UpdateItem from './UpdateItem'
import { Link } from 'react-router-dom'

const ContentWrapper = styled.div`
  border: 7px solid #38CFB1;
  width: 20%;
  background-color:#5B5656;
  margin-bottom: 30px;
  display: flex,
  flex-direction: column,
`

const Image = styled.img`
  height: 100px
  `

const Input = styled.input`

  color: #f2a365
  // background-color: #5b5656;

  `
const H4 = styled.h4`

  color: #f2a365
`

const ItemCard = ({ item }) => {
  const [products, setProducts] = useState({
    name: '',
    image_url: '',
    price: '',
    description: '',
    location: '',
    deposit: '',
    renter: '',
    type: ''
  })
  const [editing, setEditing] = useState(false)
  const [itemToEdit, setItemToEdit] = useState([])

  const { name, image_url, price, description, location, type, deposit, renter} = item;

  const deleteItem = (products) => {

    console.log(item);
    console.log("Deleting Product id: ", item.id);

    axiosWithAuth()
      .delete(`/api/items/${item.id}`)
      .then(response => {
        console.log( response);
        axiosWithAuth()
          .get('/api/items')
          .then(res => {
            setProducts(res.data);
            document.location.reload(true)})
          .catch(err => console.log("get deleted: ", err))
      })
      .catch(error => {
        console.log("Could not delete product: ", error);
      })
  };

  const editItem = e => {
    e.preventDefault();
      axiosWithAuth()
        .put(`/api/items/${item.id}`, products)
        .then(response => {
          console.log(response);
          axiosWithAuth()
            .get(`/api/items`)
            .then(res=> {
              setProducts(res.data)
              document.location.reload(true);})
            .catch(err=>{console.log(err)})
            setEditing(false)
        })
        .catch(err=> {console.log(err)})
  }
  const changeHandler = e => {
    setProducts({
        ...products,
        [e.target.name]: e.target.value
    })
}
  return (
    <ContentWrapper>
      <h2>{name}</h2>
      <Image src={image_url} />
      <h4>Price to Rent:  {price}</h4>
      <h4>Description:  {description}</h4>
      <h4>Location:   {location}</h4>
      <h4>Type: {type}</h4>
{      <h4>Deposit:   {deposit}:</h4>
}      <h4>Lender:    {renter}</h4>
        
        <button onClick={deleteItem}>Delete Item</button>

        <form onSubmit={editItem}>
          <Input 
            name='name'
            type='text'
            onChange={changeHandler}
            value={products.name} />
            
            <Input 
            name='image_url'
            type='text'
            onChange={changeHandler}
            value={products.image_url} />
            <Input 
            name='price'
            type='text'
            onChange={changeHandler}
            value={products.price} />
            <Input 
            name='description'
            type='text'
            onChange={changeHandler}
            value={products.description} />
            <Input 
            name='location'
            type='text'
            onChange={changeHandler}
            value={products.location} />
            <Input 
            name='deposit'
            type='text'
            onChange={changeHandler}
            value={products.deposit} />
            <Input 
            name='renter'
            type='text'
            onChange={changeHandler}
            value={products.renter} />
            <Input 
            name='type'
            type='text'
            onChange={changeHandler}
            value={products.type} />
            <button onClick={editItem}>Edit Item</button>
        </form>
        
      
    

    </ContentWrapper>
  );
};

export default ItemCard;
import React, { useContext } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { ItemContext } from '../contexts/ItemContext'

export const AddItem = (props) => {
    const {products, setProducts, setItems} = useContext(ItemContext)

    const changeHandler = e => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/items', products)
            .then(res => {
                console.log(res)
                setItems(res.data)
                props.history.push('/listings')
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add an Item</h1>
            <input 
                type='text'
                name='name' 
                placeholder= 'Name of Item'
                onChange={changeHandler}
                value={products.name} 
                
                />
            <input 
                type='text'
                name='image_url' 
                onChange={changeHandler}
                value={products.image_url} 
                placeholder='Image URL'
                />
            <input 
                type='text'
                name='price' 
                onChange={changeHandler}
                value={products.price} 
                placeholder='Price'
                />
            <input 
                type='text'
                name='description' 
                onChange={changeHandler}
                value={products.description} 
                placeholder='Description'
                />
            <input 
                type='text'
                name='location' 
                onChange={changeHandler}
                value={products.location} 
                placeholder='Location'
                />
            <input 
                type='text'
                name='deposit' 
                onChange={changeHandler}
                value={products.deposit} 
                placeholder='Deposit Value'
                />
            <input 
                type='text'
                name='renter' 
                onChange={changeHandler}
                value={products.renter} 
                placeholder='renter name'
                />  
                <input 
                type='text'
                name='type' 
                placeholder= 'Name of Item'
                onChange={changeHandler}
                value={products.type} 
                
                />
            <button type='submit'>Add Item</button>
        </form>
    )
}

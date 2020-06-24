import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const AddItem = props => {
    const [add, setAdd] = useState({
        name: '',
        image_url: '',
        price: '',
        description: '',
        location: '',
        deposit: '',
        renter: '',
        type: ''
    })

    const changeHandler = e => {
        setAdd({
            ...add,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/items', add)
            .then(res => {
                console.log(res);
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
                value={add.name} 
                
                />
            <input 
                type='text'
                name='image_url' 
                onChange={changeHandler}
                value={add.image_url} 
                placeholder='Image URL'
                />
            <input 
                type='text'
                name='price' 
                onChange={changeHandler}
                value={add.price} 
                placeholder='Price'
                />
            <input 
                type='text'
                name='description' 
                onChange={changeHandler}
                value={add.description} 
                placeholder='Description'
                />
            <input 
                type='text'
                name='location' 
                onChange={changeHandler}
                value={add.location} 
                placeholder='Location'
                />
            <input 
                type='text'
                name='deposit' 
                onChange={changeHandler}
                value={add.deposit} 
                placeholder='Deposit Value'
                />
            <input 
                type='text'
                name='renter' 
                onChange={changeHandler}
                value={add.renter} 
                placeholder='username'
                />  
                <input 
                type='text'
                name='type' 
                placeholder= 'Name of Item'
                onChange={changeHandler}
                value={add.type} 
                
                />
            <button type='submit'>Update Item</button>
        </form>
    )
}

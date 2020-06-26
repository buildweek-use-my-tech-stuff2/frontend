import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useParams, useHistory } from 'react-router-dom'

const UpdateItem = props => {
    const [data, setData] = useState ({
        name: '',
        image_url: '',
        price: '',
        description: '',
        location: '',
        deposit: '',
        renter: '',
        type: ''
    })
    const params = useParams();
    const { push } = useHistory;

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/items/${params.id}`)
            .then(res => {
                console.log(res)
                setData(res.data)
            })
    }, [params.id]);

    const changeHandler = e => {
        e.persist();
        setData({
            ...data, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/items/${params.id}`, data)
            .then(() => {
                const newItem = props.items.map(item => {
                    if(item.id === data.id) {
                        return data
                    }
                    return item
                })
                props.setItems(newItem);
                push(`/listings`)
            })
            .catch(err => console.log(err))
        }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Update an Item</h1>
            <input 
                type='text'
                name='name' 
                placeholder= 'Name of Item'
                onChange={changeHandler}
                value={data.name} 
                
                />
            <input 
                type='text'
                name='image_url' 
                onChange={changeHandler}
                value={data.image_url} 
                placeholder='Image URL'
                />
            <input 
                type='text'
                name='price' 
                onChange={changeHandler}
                value={data.price} 
                placeholder='Price'
                />
            <input 
                type='text'
                name='description' 
                onChange={changeHandler}
                value={data.description} 
                placeholder='Description'
                />
            <input 
                type='text'
                name='location' 
                onChange={changeHandler}
                value={data.location} 
                placeholder='Location'
                />
            <input 
                type='text'
                name='deposit' 
                onChange={changeHandler}
                value={data.deposit} 
                placeholder='Deposit Value'
                />
            <input 
                type='text'
                name='renter' 
                onChange={changeHandler}
                value={data.renter} 
                placeholder='username'
                />  
                <input 
                type='text'
                name='type' 
                placeholder= 'Name of Item'
                onChange={changeHandler}
                value={data.type} 
                
                />
            <button type='submit'>Update Item</button>
        </form>
            )
    }


export default UpdateItem;
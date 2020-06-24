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
    const { id } = useParams();
    const { push } = useHistory;

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/items/${id}`)
            .then(res => {
                console.log(res)
                setData(res.data)
            })
    }, [id]);

    const changeHandler = e => {
        e.persist();
        setData({
            ...data, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/items/${id}`, data)
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
        <>   
        <h2>Update Item</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='name' 
                onChange={changeHandler}
                value={data.name} 
                />
            <input 
                type='text'
                name='image_url' 
                onChange={changeHandler}
                value={data.image_url} 
                />
            <input 
                type='text'
                name='price' 
                onChange={changeHandler}
                value={data.price} 
                />
            <input 
                type='text'
                name='description' 
                onChange={changeHandler}
                value={data.description} 
                />
            <input 
                type='text'
                name='location' 
                onChange={changeHandler}
                value={data.location} 
                />
            <input 
                type='text'
                name='deposit' 
                onChange={changeHandler}
                value={data.deposit} 
                />
            <input 
                type='text'
                name='renter' 
                onChange={changeHandler}
                value={data.renter} 
                />  
                <input 
                type='text'
                name='type' 
                onChange={changeHandler}
                value={data.type} 
                />
            <button type='submit'>Update Item</button>
            </form>
        </>
            )
    }


export default UpdateItem;
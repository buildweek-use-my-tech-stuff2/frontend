// import React, {useEffect, useState } from 'react'
// import {axiosWithAuth} from './utils/axiosWithAuth'
// import { useParams, useHistory } from 'react-router-dom'
// import ItemCard from './Components/ItemCard'

// const Item = (props) => {
//     console.log(props)
//     const [item, setItem] = useState(null);

//     // const fetchItem = (id) => {
//     //     axiosWithAuth()
//     //         .get(`/api/items/${id}`)
//     //         .then((res) => {
//     //             console.log(res)
//     //             setItem(res.data)})
//     //         .catch(err => console.log(err.response))
//     // }
    
//     useEffect(() => {
//         axiosWithAuth()
//         .get(`/api/items/${id}`)
//         .then((res) => {
//             console.log(res)
//             setItem(res.data)})
//         .catch(err => console.log(err.response))

//     }, [])

//     return (
//         <ItemCard item={item} />
//     )
// }

// export default Item;
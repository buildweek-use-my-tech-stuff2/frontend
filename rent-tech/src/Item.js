import React, {useEffect, useState } from 'react'
import {axiosWithAuth} from './utils/axiosWithAuth'
import { useParams, useHistory, Link } from 'react-router-dom'
import ItemCard from './Components/ItemCard'

const Item = () => {
//     console.log(props)
//     const [item, setItem] = useState([]);

//     const {id}= useParams()
//     const history= useHistory()



//     const fetchItem = (id) => {
//         axiosWithAuth()
//             .get(`/api/items/${id}`)
//             .then((res) => {
//                 console.log(res.data)
//                 setItem(res.data)})
//             .catch(err => console.log(err.response))
//     }
    
//     useEffect(() => {
//         fetchItem(id);

//     }, [id])

//     const deleteItem = e => {
//         e.preventDefault();
//         axiosWithAuth()
//             .delete(`api/items/${item.id}`)
//             .then((res) => {
//                 setItem(res.data)
//                 history.push('/dashboard')
//                 props.getItemsList();
//          })
//             .catch(err => console.log(err))
//         }

//         if (!item) {
//             return <div>Loading item info</div>
//         }

//     return (
//         <div>
//             <ItemCard key={item.id} item={item} />
//             {/* <Link to={`/update-item/${params.id}`}>
//                 <button type='submit'>Update</button>
//             </Link>
//             <button onClick={deleteItem}>Delete Item</button> */}
//         </div>
//     )
// }
return (
    <h1>Request Submitted</h1>
)}
export default Item
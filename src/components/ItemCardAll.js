import React from 'react'
import {Link} from 'react-router-dom'


const ItemCard = ({item}) => {
    return(
        item ?
        <div>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <p>Condition: {item.condition}</p>
            <p>Value: {item.value}</p>
            <img src={item.image} alt=""/>
            <p>Sold By: {item.user.username}</p>
            <p>Contact Seller At: {item.user.email}</p>
            <br/>
        </div> :
        <p>Item not found!</p>
    )
}

export default ItemCard
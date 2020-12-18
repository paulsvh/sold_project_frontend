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
            <Link to={`/myitems/${item.id}/edit`}>Edit This Item</Link>
            <br/>
        </div> :
        <p>Item not found!</p>
    )
}

export default ItemCard
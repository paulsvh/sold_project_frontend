import React from 'react'


const ItemCard = ({item}) => {
    return(
        item ?
        <div>
            <br/>
            <p><i>Title:</i> {item.title}</p>
            <p><i>Description:</i> {item.description}</p>
            <p><i>Condition:</i> {item.condition}</p>
            <p><i>Value:</i> {item.value}</p>
            <img src={item.image} alt=""/>
            <p><b><i>Sold By:</i></b> {item.user.username}</p>
            <p><b><i>Contact Seller At: <a href={"mailto:" + item.user.email}>{item.user.email}</a></i></b></p>
            <br/>
        </div> :
        <p>Item not found!</p>
    )
}

export default ItemCard
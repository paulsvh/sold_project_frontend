import React from 'react'


const ItemCard = ({item}) => {
    return(
        <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.condition}</p>
            <p>{item.value}</p>
            <img src={item.image} alt=""/>

            <br/>
        </div>
    )
}

export default ItemCard
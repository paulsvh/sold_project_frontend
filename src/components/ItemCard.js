import React from 'react'
import {Link} from 'react-router-dom'
import {deleteItem} from '../actions/myItems.js'
import {connect} from 'react-redux';



const ItemCard = ({item, history, deleteItem}) => {
    return(
        item ?
        <div>
            <br/>
            <p><i>Title:</i> {item.title}</p>
            <p><i>Description:</i> {item.description}</p>
            <p><i>Condition:</i> {item.condition}</p>
            <p><i>Value:</i> {item.value}</p>
            <img src={item.image} alt=""/>
            <Link to={`/myitems/${item.id}/edit`}>Edit This Item</Link>
            <br/><br/>
            <button style={{color: 'red'}} onClick={()=>deleteItem(item.id, history)}>Delete This Item</button>
            <br/>
        </div> :
        <p>Item not found!</p>
    )
}

export default connect(null, {deleteItem})(ItemCard)
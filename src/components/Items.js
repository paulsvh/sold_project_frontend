import React from 'react'
import {connect} from 'react-redux'
import ItemCard from './ItemCard.js'


const Items = props => {
    const itemCards = props.items.map((item, index) => <ItemCard item={item} key={index}/>)
    return(
        itemCards
    )
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Items)
import React from 'react'
import {connect} from 'react-redux'
import ItemCard from './ItemCard.js'


const myItems = props => {
    const itemCards = props.items.map(item => <ItemCard item={item} key={item.id}/>)
    return(
        itemCards
    )
}

const mapStateToProps = state => {
    return {
        items: state.myItems
    }
}

export default connect(mapStateToProps)(myItems)
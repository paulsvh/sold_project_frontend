import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const myItems = props => {
    const itemCards = props.items.length > 0 ?
    props.items.map(item => <Link to={`/myitems/${item.id}`} key={item.id}>{item.title}<br/></Link>) :
    null
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
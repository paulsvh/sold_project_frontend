import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const AllItems = props => {
    const allButMyItems = props.items.filter(item => item.user.id != props.user.id)
    const itemCards = allButMyItems.map(item => <Link to={`/browse/${item.id}`} key={item.id}>{item.title}<br/><br/></Link>) 
    return(
        itemCards
    )
}

const mapStateToProps = state => {
    return {
        items: state.allItems,
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(AllItems)
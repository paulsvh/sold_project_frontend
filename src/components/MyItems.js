import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const myItems = props => {
    const itemCards = props.items.length > 0 ?
    props.items.map(item => <Link to={`/myitems/${item.id}`} key={item.id}>{item.title}<br/><br/></Link>) :
    null
    return(
        <div>
            <h1>Your Current Items Listed:</h1>
            {itemCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.myItems
    }
}

export default connect(mapStateToProps)(myItems)
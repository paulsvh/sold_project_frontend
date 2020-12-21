import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import titleSorter from './ItemSort.js'



const AllItems = props => {
    const [search, setSearch] = useState('')
    const allButMyItems = props.items.filter(item => item.user.id !== props.user.id)
    const filteredItems = allButMyItems.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })
    const sortedItems = filteredItems.sort(titleSorter) 
    const itemCards = sortedItems.map(item => <Link to={`/browse/${item.id}`} key={item.id}>{item.title}<br/><br/></Link>)

    return(
        <div>
            <h1>Find Items To Buy! BUY BUY BUY!!!</h1>
            <input type="text" placeholder="Search For Something" onChange={e => setSearch(e.target.value)}/><br/><br/>
            {itemCards}
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        items: state.allItems,
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(AllItems)
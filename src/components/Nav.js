import React from 'react'
import {connect} from 'react-redux'
import Logout from './Logout.js'
import {NavLink} from 'react-router-dom'

const Nav = ({currentUser}) => {
    return(
        <div className="NavBar">
            Welcome, {currentUser.username}. <Logout/>
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps)(Nav)
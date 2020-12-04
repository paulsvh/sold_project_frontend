import React from 'react'
import {connect} from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'


const Nav = ({currentUser}) => {
    return(
        <div>
            <h2>Welcome to SOLD</h2>
            {currentUser ? <Logout/> : <Login/>}
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps)(Nav)
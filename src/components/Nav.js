import React from 'react'
import {connect} from 'react-redux'
import Logout from './Logout.js'

const Nav = ({currentUser}) => {
    return(
        <div>
            {currentUser ? <Logout/> : ''}
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps)(Nav)
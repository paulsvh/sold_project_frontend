import React from 'react';
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import Nav from './components/Nav.js'
import MainContainer from './components/MainContainer.js'
import {Route} from 'react-router-dom'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Items from './components/Items.js'
import SignUp from './components/SignUp.js'
import Welcome from './components/Welcome.js'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    const {loggedIn} = this.props
    return (
      <div className="App">
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/logout' component={Logout}/>
        <Route exact path='/items' component={Items}/>
        <Route exact path='/' render={()=> loggedIn ? <Items/> : <Welcome/>}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, {getCurrentUser})(App);
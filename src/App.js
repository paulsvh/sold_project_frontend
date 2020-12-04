import React from 'react';
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import Nav from './components/Nav.js'
import MainContainer from './components/MainContainer.js'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    return(
      <div className="App">
      <Nav/>
      <MainContainer/>
      </div>
    )
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}


export default connect(null, {getCurrentUser})(App);
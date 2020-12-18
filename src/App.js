import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import Nav from './components/Nav.js'
import {Route, Switch, withRouter} from 'react-router-dom'
import Login from './components/Login.js'
import MyItems from './components/MyItems.js'
import SignUp from './components/SignUp.js'
import Welcome from './components/Welcome.js'
import NewItemForm from './components/NewItemForm.js'
import ItemCard from './components/ItemCard.js'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    const {loggedIn, myItems} = this.props
    return (
      <div className="App">
        {loggedIn ? <Nav/> : null}
        <Switch>
        <Route exact path='/' render={()=> loggedIn ? '' : <Welcome/>}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/myitems' component={MyItems}/>
        <Route exact path='/myitems/new' component={NewItemForm}/>
        <Route exact path='/myitems/:id' render={props => {
          const item = myItems.find(item => item.id === parseInt(props.match.params.id))
          return <ItemCard item={item} {...props}/>
          }
        }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    loggedIn: !!state.currentUser,
    myItems: state.myItems
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))
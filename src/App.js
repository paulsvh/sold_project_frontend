import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getCurrentUser} from './actions/currentUser.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import {Route, Switch, withRouter} from 'react-router-dom';
import Login from './components/Login.js';
import MyItems from './components/MyItems.js';
import AllItems from './components/AllItems.js';
import SignUp from './components/SignUp.js';
import Welcome from './components/Welcome.js';
import ItemCard from './components/ItemCard.js';
import ItemCardAll from './components/ItemCardAll.js';
import NewItemFormWrapper from './components/NewItemFormWrapper.js';
import EditItemFormWrapper from './components/EditItemFormWrapper.js';

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    const {loggedIn, myItems, allItems} = this.props
    return (
      <div className="App">
        <Header />
        {loggedIn ? <Nav/> : null}
        <body>
        <Switch>
        <Route exact path='/' render={()=> loggedIn ? '' : <Welcome/>}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/myitems' component={MyItems}/>
        <Route exact path='/browse' component={AllItems}/>
        <Route exact path='/browse/:id' render={props => {
          const item = allItems.find(item => item.id === parseInt(props.match.params.id))
          return <ItemCardAll item={item} {...props}/>
          }
        }/>
        <Route exact path='/myitems/new' component={NewItemFormWrapper}/>
        <Route exact path='/myitems/:id' render={props => {
          const item = myItems.find(item => item.id === parseInt(props.match.params.id))
          return <ItemCard item={item} {...props}/>
          }
        }/>
        <Route exact path='/myitems/:id/edit' render={props => {
          const item = myItems.find(item => item.id === parseInt(props.match.params.id))
          return <EditItemFormWrapper item={item} {...props}/>
          }
        }/>
        </Switch>
        <Footer />
        </body>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    loggedIn: !!state.currentUser,
    myItems: state.myItems,
    allItems: state.allItems
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))
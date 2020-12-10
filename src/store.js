import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/userReducer.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import items from './reducers/items'

const reducer = combineReducers({
    users,
    currentUser,
    loginForm,
    items
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
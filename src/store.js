import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myItems from './reducers/myItems'
import signUpForm from './reducers/signUpForm.js'
import itemForm from './reducers/itemForm.js'
import allItems from './reducers/allItems'

const reducer = combineReducers({
    currentUser,
    loginForm,
    signUpForm,
    myItems,
    itemForm,
    allItems
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
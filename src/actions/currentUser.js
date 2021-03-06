import {resetLoginForm} from './loginForm.js'
import {resetSignUpForm} from './signUpForm.js'
import {getMyItems, clearItems} from './myItems.js'
import {getAllItems} from './allItems.js'

export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
                dispatch(getMyItems())
                dispatch(getAllItems())
                dispatch(resetLoginForm())
                history.push('/myitems')
            }
        })
        .catch(console.log)
    }
}

export const signUpRequest = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3001/api/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch(setCurrentUser(user))
            dispatch(getMyItems())
            dispatch(getAllItems())
            dispatch(resetSignUpForm())
            history.push('/')

          }
        })
        .catch(console.log)
    }
  }

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error){
                console.log(user.error)
            } else {
                dispatch(setCurrentUser(user))
                dispatch(getMyItems())
                dispatch(getAllItems())

            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearItems())
        return fetch('http://localhost:3001/api/logout', {
            credentials: 'include',
            method: "DELETE"
        })
    }

}

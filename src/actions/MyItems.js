import {resetSignUpForm} from './signUpForm.js'

export const setMyItems = items => {
    return {
        type: "SET_MY_ITEMS",
        items
    }
}

export const clearItems = () => {
    return {
        type: "CLEAR_ITEMS"
    }
}

export const addItem = item => {
    return {
        type: "ADD_ITEM",
        item
    }
}

export const getMyItems = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/items", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            } else {
                dispatch(setMyItems(response))
            }
        })
        .catch(console.log)
    }
}

export const createItem = itemData => {
    return dispatch => {
        const sendableItemData = {
            title: itemData.title,
            description: itemData.description,
            value: itemData.value,
            user_id: itemData.userId
        }
        return fetch("http://localhost:3001/api/items", {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableItemData)
        })
        .then(r => r.json())
        .then(item => {
            if (item.error) {
                alert(item.error)
              } else {
                
                dispatch(resetSignUpForm())
                dispatch(addItem(item))
    
              }
        })
    }
}
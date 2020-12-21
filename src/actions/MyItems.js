import {resetItemForm} from './itemForm.js'


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

export const updateItemSuccess = item => {
    return {
        type: "UPDATE_ITEM",
        item
    }
}

export const deleteItemSuccess = itemId => {
    return {
        type: "DELETE_ITEM",
        itemId
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

export const createItem = (itemData, history) => {
    return dispatch => {
        const sendableItemData = {
            title: itemData.title,
            description: itemData.description,
            condition: itemData.condition,
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
                
                dispatch(resetItemForm())
                dispatch(addItem(item))
                history.push(`/myitems/${item.id}`)
              }
        })
    }
}

export const updateItem = (itemData, history) => {
    return dispatch => {
        const sendableItemData = {
            title: itemData.title,
            description: itemData.description,
            condition: itemData.condition,
            value: itemData.value,
        }
        return fetch(`http://localhost:3001/api/items/${itemData.itemId}`, {
            credentials: "include",
            method: "PATCH",
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
                
                dispatch(updateItemSuccess(item))
                history.push(`/myitems/${item.id}`)
              }
        })
    }
}

export const deleteItem = (itemId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/items/${itemId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
        })
        .then(r => r.json())
        .then(item => {
            if (item.error) {
                alert(item.error)
              } else {
                
                dispatch(deleteItemSuccess(itemId))
                history.push(`/myitems`)
              }
        })
    }
}
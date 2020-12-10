export const setItems = items => {
    return {
        type: "SET_ITEMS",
        items
    }
}



export const getItems = () => {
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
                dispatch(setItems([]))
            }
        })
        .catch(console.log)
    }
}
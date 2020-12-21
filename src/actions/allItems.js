export const setItems = items => {
    return {
        type: "SET_ITEMS",
        items
    }
}

export const getAllItems = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/allitems", {
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
                dispatch(setItems(response))
            }
        })
        .catch(console.log)
    }
}
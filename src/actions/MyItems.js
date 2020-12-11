export const setMyItems = items => {
    return {
        type: "SET_MY_ITEMS",
        items
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
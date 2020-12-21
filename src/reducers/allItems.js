const initialState = []

export default (state = initialState, action) => {
    switch (action.type){
        case "SET_ITEMS":
            return action.items
        default:
            return state 
    }
}
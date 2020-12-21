const initialState = []

export default (state = initialState, action) => {
    switch (action.type){
        case "SET_MY_ITEMS":
            return action.items
        case "ADD_ITEM":
            return state.concat(action.item)
        case "UPDATE_ITEM":
            return state.map(item => item.id === action.item.id ? action.item : item)
        case "CLEAR_ITEMS":
            return initialState
        default:
            return state 
    }
}
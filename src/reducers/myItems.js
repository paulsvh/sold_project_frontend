export default (state = [], action) => {
    switch (action.type){
        case "SET_MY_ITEMS":
            return action.items
        default:
            return state 
    }
}
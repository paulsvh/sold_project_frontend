const initialState = {
    title: '',
    description: '',
    condition: '',
    value: '',
    image: '',
}

export default (state = initialState, action) => {
    switch (action.type){
        case "UPDATE_NEW_ITEM_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return returnVal
        case "RESET_NEW_ITEM_FORM":
            return initialState
        default:
            return state
    }
}
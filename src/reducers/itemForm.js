const initialState = {
    title: '',
    description: '',
    condition: '',
    value: '',
    image: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case "UPDATE_ITEM_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return returnVal
        case "RESET_ITEM_FORM":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT":
            return action.itemFormData
        default:
            return state
    }
}
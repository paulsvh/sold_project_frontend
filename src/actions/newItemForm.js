export const updateNewItemForm = (name, value) => {
    const formData = {name, value}
    return{
        type: "UPDATE_NEW_ITEM_FORM",
        formData
    }
}

export const resetNewItemForm = () => {
    return {
      type: "RESET_NEW_ITEM_FORM"
    }
  }
export const updateItemForm = (name, value) => {
    const formData = {name, value}
    return{
        type: "UPDATE_ITEM_FORM",
        formData
    }
}

export const resetItemForm = () => {
    return {
      type: "RESET_ITEM_FORM"
    }
  }
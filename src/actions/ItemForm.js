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

export const setFormDataForEdit = item => {
  const itemFormData = {
    title: item.title,
    description: item.description,
    condition: item.condition,
    value: item.value
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    itemFormData
  }
}
import React from 'react';
import {updateItemForm} from '../actions/itemForm.js'
import {connect} from 'react-redux'


const ItemForm = ({itemFormData, updateItemForm, handleSubmit, item, editMode}) => {
   
    const handleChange = event => {
        const {name, value} = event.target
        updateItemForm(name, value)
    }

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault()
                handleSubmit(itemFormData)
            }}>
                <input 
                placeholder="Item Listing Title"
                name="title" 
                onChange={handleChange} 
                value={itemFormData.title} 
                />
                <input 
                placeholder="Item Description"
                name="description" 
                onChange={handleChange} 
                value={itemFormData.description} 
                />
                <input 
                placeholder="Item Condition"
                name="condition" 
                onChange={handleChange} 
                value={itemFormData.condition} 
                />
                <input
                placeholder="Item Value" 
                name="value" 
                onChange={handleChange} 
                value={itemFormData.value} 
                />
                <br/>
 
                <input 
                type="submit" 
                value={editMode ? "Update This Item" : "Let's Sell This Thang!"}/>
            </form>
        </div>
)}

    const mapStateToProps = state => {
        const userId = state.currentUser ? state.currentUser.id : ''
        return {
            itemFormData: state.itemForm,
            userId
        }
    }

export default connect(mapStateToProps, {updateItemForm})(ItemForm);

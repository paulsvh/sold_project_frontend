import React from 'react';
import {updateNewItemForm} from '../actions/newItemForm.js'
import {connect} from 'react-redux'
import {createItem} from '../actions/myItems.js'


const NewItemForm = ({newItemFormData, updateNewItemForm, createItem, userId}) => {
    const handleChange = event => {
        const {name, value} = event.target
        updateNewItemForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createItem({
            ...newItemFormData,
            userId
            })
        }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="Item Listing Title"
            name="title" 
            onChange={handleChange} 
            value={newItemFormData.title} 
            />
            <input 
            placeholder="Item Description"
            name="description" 
            onChange={handleChange} 
            value={newItemFormData.description} 
            />
            <input 
            placeholder="Item Condition"
            name="condition" 
            onChange={handleChange} 
            value={newItemFormData.condition} 
            />
            <input
            placeholder="Item Value" 
            name="value" 
            onChange={handleChange} 
            value={newItemFormData.value} 
            />
            <input
            placeholder="Item Image" 
            name="image" 
            type="file" 
            accept=".png, .jpg, .jpeg" 
            onChange={handleChange} 
            value={newItemFormData.image}
            />
            <input type="submit" value="Let's Sell This Thang!"/>

        </form>
    )}

    const mapStateToProps = state => {
        const userId = state.currentUser ? state.currentUser.id : ''
        return {
            newItemFormData: state.newItemForm,
            userId
        }
    }

export default connect(mapStateToProps, {updateNewItemForm, createItem})(NewItemForm);


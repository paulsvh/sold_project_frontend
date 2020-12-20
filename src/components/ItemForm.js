import React from 'react';
import {updateItemForm} from '../actions/ItemForm.js'
import {connect} from 'react-redux'
import {createItem} from '../actions/myItems.js'


const ItemForm = ({itemFormData, updateItemForm, createItem, userId, history}) => {
   
    const handleChange = event => {
        const {name, value} = event.target
        updateItemForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createItem({
            ...itemFormData,
            userId,
        }, history)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
 
                <input type="submit" value="Let's Sell This Thang!"/>
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

export default connect(mapStateToProps, {updateItemForm, createItem})(ItemForm);

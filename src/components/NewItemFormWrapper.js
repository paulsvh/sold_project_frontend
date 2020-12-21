import React from 'react';
import {createItem} from '../actions/myItems.js';
import {connect} from 'react-redux';
import ItemForm from './ItemForm.js';

const NewItemFormWrapper = ({history, createItem}) => {

    const handleSubmit = (itemFormData, userId) => {
        createItem({
            ...itemFormData,
            userId,
        }, history)
    }

    return <ItemForm history={history} handleSubmit={handleSubmit}/>
}

export default connect(null, {createItem})(NewItemFormWrapper);
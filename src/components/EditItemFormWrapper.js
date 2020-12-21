import React from 'react';
import {updateItem, deleteItem} from '../actions/myItems.js';
import {setFormDataForEdit, resetItemForm} from '../actions/itemForm.js';
import {connect} from 'react-redux';
import ItemForm from './ItemForm.js';

class EditItemFormWrapper extends React.Component {

    componentDidMount(){
        this.props.item && this.props.setFormDataForEdit(this.props.item)
    }

    componentDidUpdate(prevProps){
        this.props.item && !prevProps.item && this.props.setFormDataForEdit(this.props.item)
    }
    
    componentWillUnmount(){
        this.props.resetItemForm()
    }

    handleSubmit = (itemFormData) => {
        const {updateItem, item, history} = this.props
        updateItem({
            ...itemFormData,
            itemId: item.id,
        }, history)
    }

    render() {
        const {history, deleteItem, item} = this.props
        const itemId = item ? item.id : null
        return <>
                    <ItemForm editMode handleSubmit={this.handleSubmit}/>
                    <br/>
                    <button style={{color: 'red'}} onClick={()=>deleteItem(itemId, history)}>Delete This Item</button>
               </>
    }
}

export default connect(null, {updateItem, deleteItem, setFormDataForEdit, resetItemForm})(EditItemFormWrapper);
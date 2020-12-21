import React from 'react';
import {updateItem} from '../actions/myItems.js';
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
        const {history, handleSubmit} = this.props
        return <ItemForm editMode handleSubmit={this.handleSubmit}/>}
}

export default connect(null, {updateItem, setFormDataForEdit, resetItemForm})(EditItemFormWrapper);
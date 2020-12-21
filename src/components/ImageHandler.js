import React from 'react';
import {connect} from 'react-redux'

class ImageHandler extends React.Component {

    state = {
        image: null
    }


    imageSelectHandler = event => {
        this.setState({
            image: event.target.files[0]
        })
    }

    imageUploadHandler = event => {
        event.preventDefault();
        const attachedImg = ({image: this.state.image, user_id: this.userId})
        fetch(`http://localhost:3001/api/items/${this.props.item.id}`, {
            method: "PATCH",
            body: attachedImg
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="imageHandler">
                <p>Select an image to attach:</p>
                <input type="file" accept="image/*" multiple={false} onChange={this.imageSelectHandler}/>
                <button onClick={this.imageUploadHandler}>Attach This Image</button>
            </div>
        )
    }


}
const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ''
    return {
        userId
    }
}

export default connect(mapStateToProps)(ImageHandler);

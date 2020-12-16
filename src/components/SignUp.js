import React from 'react'
import {connect} from 'react-redux'
import {updateSignUpForm} from '../actions/signUpForm.js'
import {signUpRequest} from '../actions/currentUser.js'

const signUp = ({signUpFormData, updateSignUpForm, signUpRequest, history}) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...signUpFormData,
          [name]: value
        }
        updateSignUpForm(updatedFormInfo)
      }

      const handleSubmit = event => {
          event.preventDefault()
          signUpRequest(signUpFormData, history)
      }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="username" value={signUpFormData.username} name="username" type="text" onChange={handleInputChange}/>
            <input placeholder="email" value={signUpFormData.email} name="email" type="text" onChange={handleInputChange}/>
            <input placeholder="password" value={signUpFormData.password} name="password" type="password" onChange={handleInputChange}/>
            <input placeholder="location" value={signUpFormData.location} name="location" type="text" onChange={handleInputChange}/>
            <input type="submit" value="Sign Up"/>

        </form>
    )
}


const mapStateToProps = state => {
    return {
        signUpFormData: state.signUpForm
    }
}

export default connect(mapStateToProps, {updateSignUpForm, signUpRequest})(signUp)
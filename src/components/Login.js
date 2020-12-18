import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm.js'
import {login} from '../actions/currentUser.js'
import {Link} from 'react-router-dom'


const Login = ({loginFormData, updateLoginForm, login, history}) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...loginFormData,
          [name]: value
        }
        updateLoginForm(updatedFormInfo)
      }

      const handleSubmit = event => {
          event.preventDefault()
          login(loginFormData, history)
      }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange}/>
            <input placeholder="password" value={loginFormData.password} name="password" type="password" onChange={handleInputChange}/>
            <input type="submit" value="Log In"/>
        </form>
        <p>Or, <Link to='/signup'>Sign Up</Link></p>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)
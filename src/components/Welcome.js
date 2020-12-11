import React from 'react';
import {Link} from 'react-router-dom'

const Welcome = () => (
    <div>
        <h2>
            Welcome, please <Link to='/login'>Log In</Link> or <Link to='/signup'>Sign Up</Link>
        </h2>
    </div>
)

export default Welcome
import React, { Component } from 'react';
import './App.css'

class Login extends Component {
    
    render() { 
        return ( 
            <form id='form'>
                <h1>Login</h1>
            <label for="email">Email</label><br/>
    <input type="text" id="email" placeholder="email address" name="email" required /><br/>

    <label for="psw">Password</label><br/>
    <input type="password" id="psw" name="psw" required /><br/>
        
    <button type="submit">Login</button>
</form>
         );
    }
}
 
export default Login;
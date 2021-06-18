import React, { Component } from 'react';
import store from '../Redux/Redux';

const redux=()=>{
    store.dispatch({
        type:"Login"
    })
} 

const redux1=()=>{
    store.dispatch({
        type:"signUp"
    })
} 

class Login extends Component {
    render() {
        
        return (
            <div>
                <input type="text" name="id"/>
                <input type="password" name="pass"/>
                <button onClick={redux}>Signin</button>
                <button onClick={redux1}>SignUp</button>
                
            </div>
        );
    }
}

export default Login;
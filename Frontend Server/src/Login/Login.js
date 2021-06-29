import React, { Component } from 'react'
import { FormControl,InputLabel,Button,Input,Card,CardContent} from '@material-ui/core';
import Navigation from '../homepage/js/Navigation'
import Category from '../homepage/js/Category'
import Footer from '../homepage/js/Footer'
import './Login.css'
import {connect} from 'react-redux'
import {login,signup} from '../Actions/LoginAction'

class Login extends Component {
    
    state={
        mail:'',
        password:''
    }
    

    mail=(e)=>{
        this.setState({
            mail:e.target.value
        })
    }  

    password=(e)=>{
        this.setState({
            password:e.target.value
        })
    }  
    
    submit=(e)=>{
        e.preventDefault();
        signup(this.state.mail,this.state.password);
    }
    
    submit1=(e)=>{
        e.preventDefault();
        login(this.state.mail,this.state.password);
    }

    render() {
        
        return (
            <div className="log">
                <Navigation/>
                <Category/>
                <br/>
                <b>Login!</b> 
                <Card className="cards">
                    <CardContent className="card1">
                        <FormControl className="login">
                            <InputLabel htmlFor="my-input">Email id</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" onChange={this.mail}/>
                        </FormControl>  <br/><br/>
                        <FormControl className="login">
                            <InputLabel htmlFor="input">Password</InputLabel>
                            <Input type="password" id="input" aria-describedby="my-helper-text" onChange={this.password}/>
                        </FormControl>      <br/><br/>
                            <Button variant="contained" color="primary" onClick={this.submit1}>Login</Button><br/><br/>
                            <h5>Don't have Account?</h5>
                            <Button variant="contained" color="secondary" onClick={this.submit}>Signup</Button><br/><br/>
                            <h5>{this.props.valid}</h5>
                    </CardContent>
                </Card> 
                <Footer/>       
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {

        ...state,valid:state.valid
    }
}    

export default connect(mapStateToProps)(Login);
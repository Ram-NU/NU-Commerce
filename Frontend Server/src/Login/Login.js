import React, { useState } from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { FormControl,InputLabel,Button,Input,Card,CardContent} from '@material-ui/core';
import Navigation from '../homepage/js/Navigation'
import Category from '../homepage/js/Category'
import Footer from '../homepage/js/Footer'
import {login,signup} from '../Actions/LoginAction'
import isEmail from 'validator/lib/isEmail'
import {store} from '../Redux/Redux'
import './Login.css'

const logout=(e)=>{
    store.dispatch({
        type:"VALID",
        payload:false
    })
    store.dispatch({
        type:"STATUS",
        payload:""
    })
}

function Login(props) {
    
    const[mail,changeMail]=useState("")
    const [password,changePassword]=useState("")
    
    const hist=useHistory()

    const Mail=(e)=>{
        changeMail(e.target.value)
    }  

    const Password=(e)=>{
        changePassword(e.target.value)
    }  
  
    const submit=(hist)=>{
        if(isEmail(mail)){
            signup(mail,password);
            store.dispatch({
                type:"CREDENTIALS",
                payload:{
                    mail:mail,
                    password:password
                }
            })
            hist.push('/')
        }
        else {
            store.dispatch({
                type:"STATUS",
                payload:"Please enter Proper E-mail"
            })
        }   
    }
    
    const submit1=(hist)=>{
        if(isEmail(mail)){
            login(mail,password);
            store.dispatch({
                type:"CREDENTIALS",
                payload:{
                    mail:mail,
                    password:password
                }
            })
        }
        else{
            store.dispatch({
                type:"STATUS",
                payload:"Please enter Proper E-mail"
            })
        }    
    }

          
    return (
        <div className="log">
            <Navigation/>
            <Category/>
            <br/>
            {
            props.isValid?
            <div className="logout">
                <b>Welcome! {props.mail}</b><br/><br/>
                <Button variant="contained" color="primary" onClick={()=>{logout()}}>Logout</Button>
                <br/><br/><b>Thankyou for visiting our NUcart!</b><br/><br/>
            </div>:
            <section> 
            <b>Login to NUcart!</b><br/><br/>
            <Card className="cards">
                <CardContent className="card1">
                    <FormControl className="login">
                        <InputLabel htmlFor="my-input">Email id</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={Mail}/>
                    </FormControl>  <br/><br/>
                    <FormControl className="login">
                        <InputLabel htmlFor="Input">Password</InputLabel>
                        <Input type="password" id="input" aria-describedby="my-helper-text" onChange={Password}/>
                    </FormControl>      <br/><br/>
                        <Button variant="contained" color="primary" onClick={()=>{submit1(hist)}}>Login</Button><br/><br/>
                        <h5>Don't have Account?</h5>
                        <Button variant="contained" color="secondary" onClick={()=>{submit(hist)}}>Signup</Button><br/><br/>
                        <h5>{props.valid}</h5>
                </CardContent>
            </Card> 
            </section>
            }
            <Footer/>       
        </div>  
    );  
}

const mapStateToProps=(state)=>{
    return {

        ...state,valid:state.valid
    }
}    

export default connect(mapStateToProps)(Login);
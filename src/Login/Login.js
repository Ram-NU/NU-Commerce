import React, { Component } from 'react'
import store from '../Redux/Redux'
import mongoose from 'mongoose'



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ram:mongodb@cluster0.nsnj5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


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
                <input type="text" name="id"/><br/>
                <input type="password" name="pass"/><br/>
                <button onClick={redux}>Signin</button><br/>npm start
                <button onClick={redux1}>SignUp</button>
            </div>
        );
    }
}

export default Login;
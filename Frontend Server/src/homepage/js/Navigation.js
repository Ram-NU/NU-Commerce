import React,{useState} from 'react';
import '../css/Navigation.css';
import Logo from '../img/logo.svg';
import Cart from '../img/cart.png';
import { useHistory } from 'react-router-dom';

// import {setProduct} from '/Actions/ProductAction.js'
   

function Navigation(props){

        var hist=useHistory();

        const[product,changeProduct]=useState("Error")
        
        const route=(type)=>{
            switch(type){
                case "cart":
                    hist.push('/cart')
                    break
                case "login": 
                    //setProduct()
                    hist.push('/login')
                    break 
                case "search": 
                    hist.push("/search?product="+product)  
                    break  
                default:  
                    hist.push('/')   
            }    
        } 

        const changeSearch=(e)=>{
            changeProduct(e.target.value)
        }

    
        return(
            
            <div className="nav-bar">
               
                <img src={Logo} alt="Hai!" className="logo-size" onClick={route}/>  
                <b className="nav-text" onClick={route}>NU Cart</b>

                <div className="searching">
                    <input type="text" className="search" onChange={changeSearch}/>
                    <button onClick={()=>route("search")} className="button-nav">Search</button>
                </div>
                
                <button onClick={()=>route("login")} className="login-nav">Profile</button>:

                <div className="cart-all"> 
                    <button onClick={()=>route("cart")} className="cart-nav">
                        Cart
                        <img className="cart-logo" alt="logo" src={Cart}/>
                    </button>
                </div>
            </div>
        );
        
} 

export default Navigation  

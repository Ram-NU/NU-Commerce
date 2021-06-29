import React from 'react';
import '../css/Navigation.css';
import Logo from '../img/logo.svg';
import Cart from '../img/cart.png';
import { useHistory } from 'react-router-dom';

const rs=(type)=>{
     alert(type);
}    


function Navigation(){

        var hist=useHistory();
        
        const route=(type)=>{
            switch(type){
                case "cart":
                    hist.push('/cart')
                    break
                case "login": 
                    hist.push('/login')
                    break  
                default:  
                    hist.push('/')   
            }    
        } 
        
    
        return(
            
            <div className="nav-bar">
               
                <img src={Logo} alt="Hai!" className="logo-size" onClick={route}/>  
                <b className="nav-text" onClick={route}>NU Cart</b>

                <div className="searching">
                    <input type="text" className="search"/>
                    <button onClick={()=>rs("search")} className="button-nav">Search</button>
                </div>
                <button onClick={()=>route("login")} className="login-nav">LOGIN</button>
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

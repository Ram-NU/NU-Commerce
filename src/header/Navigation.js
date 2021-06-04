import React from 'react';
import './Navigation.css';
import Logo from 'C:/react/NU-Commerce/src/logo.svg';
import Cart from 'C:/react/NU-Commerce/src/header/cart.png';

const rs=()=>{
     alert("Hai!");
}    

class Navigation extends React.Component{
    render(){
        return(
            
            <div className="nav-bar">
                <img src={Logo} alt="Hai!" className="logo-size"/>  
                <b className="nav-text">NU Cart</b>
                <input type="text" className="search"/>
                <button onClick={rs} className="button-nav"><b className="search-text">Search</b></button>
                <button onClick={rs} className="login-nav"><b className="search-text">LOGIN</b></button>
                <button onClick={rs} className="cart-nav"><b className="cart-b">Cart</b><img className="cart-logo" alt="logo" src={Cart}/></button>
            </div>
 
        );
        }  
    } 
export default Navigation  

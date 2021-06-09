import React from 'react';
import '../css/Navigation.css';
import Logo from '../img/logo.svg';
import Cart from '../img/cart.png';

const rs=()=>{
     alert("Hai!");
}    


class Navigation extends React.Component{

    render(){
        return(
            
            <div className="nav-bar">
               
                <img src={Logo} alt="Hai!" className="logo-size"/>  
                <b className="nav-text">NU Cart</b>

                <div className="searcing">
                    <input type="text" className="search"/>
                    <button onClick={rs} className="button-nav">Search</button>
                </div>
                <button onClick={rs} className="login-nav">LOGIN</button>
                <div className="cart-all"> 
                    <button onClick={rs} className="cart-nav">
                        Cart
                        <img className="cart-logo" alt="logo" src={Cart}/>
                    </button>
                </div>
            </div>
        );
        }  
    } 
export default Navigation  

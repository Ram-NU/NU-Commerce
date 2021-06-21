import React, { Component } from 'react';
import Navigation from '../homepage/js/Navigation';
import Category from '../homepage/js/Category';
import Footer from '../homepage/js/Footer' 

class Cart extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Category/>
                <div className="cart">
                    <b>{true?"Shopping Cart Items:":"Cart is empty"}</b>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Cart;
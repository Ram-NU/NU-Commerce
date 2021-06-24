import React, { Component} from 'react';
import Navigation from '../homepage/js/Navigation';
import Category from '../homepage/js/Category';
import Footer from '../homepage/js/Footer' 
import './Cart.css'
import {store} from '../Redux/Cart-Redux'
import {connect} from 'react-redux'

const remove=(product)=>{
    store.dispatch({
        type:'REMOVE',
        payload:{
            product:product
        }    
    })
}    

class Cart extends Component {
    
    render() {
        const data=this.props.items
        return (
            <div className="cart">
                <Navigation/>
                <Category/>
                <div>
                    <div className="cart__body">
                        {this.props.empty?<b>OOPS! Cart is empty</b>:<b>Shopping cart items:</b>}<br/>
                        {data.map((data,index)=>(
                            <div className="cart-item" key={index}>
                                <img className="img" src={data.img} alt="img"/>
                                <span className="cart-item__name">{data.product}</span>
                                <div className="cart-item__price">₹{data.price}</div>
                                <button className="btn btn-danger btn-xs click" onClick={()=>{remove(data.product)}}>Remove</button>
                            
                            </div> 
                        ))}
                        {this.props.empty?<div/>:
                        <div className="container checkout">
                            <b>Total: ₹{parseFloat(this.props.total)}
                            </b> <button className="btn btn-xs click">Checkout</button>
                        </div>
                        }       
                    </div>    
                </div>
                <Footer/>
            </div>
        );
    }
}
 

const mapStateToProps=(state)=>{
    return{
        items:state.items,
        empty:state.empty,
        total:state.total
    }    
}    
   

export default connect(mapStateToProps)(Cart);
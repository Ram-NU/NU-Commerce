import React from 'react';
import {useHistory} from 'react-router-dom'
import Navigation from '../homepage/js/Navigation';
import Category from '../homepage/js/Category';
import Footer from '../homepage/js/Footer' 
import './Cart.css'
import {store} from '../Redux/Redux'
import {connect} from 'react-redux'



const remove=(product,price)=>{
    store.dispatch({
        type:'REMOVE',
        payload:{
            product:product,
            price:price
        }    
    })
}    

const checkout=(hist)=>{
    if(store.getState().isValid!==true){
        hist.push('/login')
    }
    else{
        hist.push('/payment') 
    }
}   


function Cart(props) { 

    const hist=useHistory()
        
    const data=props.items
    return (
        <div className="cart">
            <Navigation/>
            <Category/>
            <div>
                <div className="cart__body">
                    {props.empty?<div className="OOPS"><b>OOPS! Cart is empty</b><br/><br/></div>:<b>Shopping cart items:</b>}<br/>
                    {data.map((data,index)=>(
                        <div className="cart-item" key={index}>
                            <img className="img" src={data.img} alt="img"/>
                            <span className="cart-item__name">Product: {data.product}</span>
                            <div className="cart-item__price">Price: ₹{data.price}</div>
                            <button className="btn btn-danger btn-xs click" onClick={()=>{remove(data.product,data.price)}}>Remove</button>
                        
                        </div> 
                    ))}
                    {props.empty?<div/>:
                    <div className="container checkout">
                        <b>Total: ₹{parseFloat(props.total)}
                        </b> <button onClick={()=>{checkout(hist)}} className="btn btn-xs click">Checkout</button>
                    </div>
                    }       
                </div>    
            </div>
            <Footer/>
        </div>
    );
}
 

const mapStateToProps=(state)=>{
    return{
        ...state,
        items:state.items,
        empty:state.empty,
        total:state.total
    }    
}    
   

export default connect(mapStateToProps)(Cart);
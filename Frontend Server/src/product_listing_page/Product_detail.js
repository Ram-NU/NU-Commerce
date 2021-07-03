import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Navigation from '../homepage/js/Navigation';
import Category from '../homepage/js/Category';
import Footer from '../homepage/js/Footer';
import './css/Product_detail.css';
import {store} from '../Redux/Redux'
import {getItem} from '../Actions/ProductAction'



const buttons=(opt)=>{
    alert(opt);
}   
    
const cart=(product,price,image)=>{
    buttons(product+" is added to cart")
    store.dispatch({
        type:'ADD',
        payload:{
            product:product,
            price:price,
            img:image
        }    
    })
}    


function Productdetail(){

    const {id}=useParams()
    const[data,changeData]=useState({})
    
    
    useEffect( ()=>{
        async function fetchData() {
            const product=await getItem(id)
            changeData(product[0])
        }
        fetchData()    
     }, [id] );
    
    return (
        <div className="prod">
            <Navigation/>
            <Category/>
            <div className="prod_list">   
                <div>
                    <br/><b>{data.category}</b>
                </div>
                
                <div className="details">
                    <div className="image">
                        <img src={data.image} alt={data.image}/>
                    </div> 
            
                    <div className="det">
                        <b>{data.prod}</b><br/><br/>
                        <b>Price: {data.price}</b>
                        <div className="specs">
                            <p><br/><b>Brand: </b>{data.brand}</p>
                                {/* <p><b>Color: </b>{data.color[0]} {data.color[1]}</p><br/>  */}
                                <p><b>About: </b>{data.spec}</p>
                        </div> 
                        <br/>
                        <button onClick={()=>{cart(data.category,data.price,data.image)}}>Add to cart</button>
                        <button onClick={()=>{buttons("Buy")}}>Buy</button>
                    </div> 
                </div>  
        
            </div>

            <Footer/>
        </div>
    );
}

export default Productdetail;
import React,{useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import Navigation from '../homepage/js/Navigation';
import Category from '../homepage/js/Category';
import Footer from '../homepage/js/Footer';
import './css/Product_detail.css';
import {store} from '../Redux/Redux'
import {getItem} from '../Actions/ProductAction'


function Productdetail(){

    const {id}=useParams()
    const[data,changeData]=useState({})
    const hist=useHistory()


    const buy=(data,hist)=>{
        store.dispatch({
            type:'ADD',
            payload:{
                product:data.category,
                price:data.price,
                img:data.image
            }    
        })
        hist.push('/cart')
    }   
        
    const cart=(product,price,image,hist)=>{
        store.dispatch({
            type:'ADD',
            payload:{
                product:product,
                price:price,
                img:image
            }    
        })
        hist.push('/cart')
    }    
    
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
                        <button onClick={()=>{cart(data.category,data.price,data.image,hist)}}>Add to cart</button>
                        <button onClick={()=>{buy(data,hist)}}>Buy</button>
                    </div> 
                </div>  
        
            </div>

            <Footer/>
        </div>
    );
}

export default Productdetail;
import React,{useEffect,useState} from 'react';
import 'C:/NU/NU-Commerce/Frontend Server/src/homepage/css/Card-view.css';
import {useHistory,useParams} from 'react-router-dom'; 
import { getProduct } from 'C:/NU/NU-Commerce/Frontend Server/src/Actions/ProductAction.js';
   

function CardView(){ 

    const[data,changeData]=useState([{}])
    const {id}=useParams()

    
    useEffect( ()=>{
        async function fetchData() {
            const products=await getProduct(id.toLowerCase())
            changeData(products)
        }
        fetchData()    
     }, [id] );

    var hist=useHistory();

    function Al(caty){
        hist.push('/prod/'+caty)
      }  
        //data.sort((a, b) => a.price < b.price ? -1 : (a.price < b.price ? 1 : 0))
        const Categories=  data || [];
        return(
            <div>
            {Categories.map((items,index)=>(
                <section className="card-container" key={index} onClick={()=>{Al(items.category)}}>                    
                    
                    <section className="card-title">
                        {items.category}
                    </section>   
                    <section className="card-image">
                        <img src={items.image} alt="card-img"/>          
                    </section>
                    <section className="card-button">
                    <h3>Price: ₹{items.price}</h3>
                    </section>   
                
                </section>        
            ))} 
            </div>       
        );
    }      

export default CardView
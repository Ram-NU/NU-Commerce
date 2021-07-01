import React,{useEffect,useState} from 'react';
import {useHistory,useParams,useLocation} from 'react-router-dom';
import Navigation from 'C:/NU/NU-Commerce/Frontend Server/src/homepage/js/Navigation.js';
import Category from 'C:/NU/NU-Commerce/Frontend Server/src/homepage/js/Category.js';
import Footer from 'C:/NU/NU-Commerce/Frontend Server/src/homepage/js/Footer.js';
import 'C:/NU/NU-Commerce/Frontend Server/src/homepage/css/Card-view.css'
import '../css/List.css';


import { getItem } from 'C:/NU/NU-Commerce/Frontend Server/src/Actions/ProductAction.js';
import { getProduct } from 'C:/NU/NU-Commerce/Frontend Server/src/Actions/ProductAction.js';

function List(){

    var[data,changeData]=useState([{}])
    const[sort,changeSort]=useState(-1)
    const[min,changeMin]=useState(0)
    const[max,changeMax]=useState(200000)
    
    const {id}=useParams()
    const search = useLocation().search
    const product = new URLSearchParams(search).get('product')

    const getMin=(e)=>{
        changeMin(e.target.value)
    }

    const getMax=(e)=>{
        changeMax(e.target.value)
    }

    
    useEffect( ()=>{
        async function fetchData() {
            var products= [{}]
            if(product!=="Error"){
                products=await getItem(product)
            }
            if(id){
                products=await getProduct(id.toLowerCase())
            }
            changeData(products)
        }
        fetchData()    
     }, [id,product] )

    var hist=useHistory()

    function Al(caty){
        hist.push('/prod/'+caty)
      }  

        if(sort===0){  
            data.sort((a, b) => a.price < b.price ? -1 : (a.price < b.price ? 1 : 0))
        }
        if(sort===1){
            data.sort((a, b) => a.price > b.price ? -1 : (a.price > b.price ? 1 : 0))
        } 


        data=data.filter((i)=>i.price>=min && i.price<=max)
        
        
        const Categories=  data || [];

    return(
        <React.Fragment>
            <Navigation/>
            <Category/>
            <div className="body">
                <div className="content">
                    <div className="filter">
                        <br/><br/>
                        <b>Filters</b><br/><br/>
                        <div className="fil-elt">
                        <b>Sort Order</b><br/>
                            <input type="radio" name="sort" value="Redmi" onChange={()=>changeSort(0)}/>
                            <label>Low to high</label><br/>
                            <input type="radio" name="sort" value="Oppo" onChange={()=>changeSort(1)}/>
                            <label>High to low</label><br/><br/>
                            <b>Price</b><br/><br/>
                        </div>
                        <div className="amount">
                            <b>Min -</b>
                            <input type="text" name="min" id="min" width="25%" value={min} onChange={getMin}/>
                            <b>Max -</b>
                            <input type="text" name="max" id="max" width="25%" value={max} onChange={getMax}/>
                        </div><br/><br/>
                        <div className="color">
                            <b>Colors</b><br/><br/>
                            <select id="col" name="col">
                                <option value="green">Green</option>
                                <option value="yellow">Yellow</option>
                                <option value="black">Black</option>
                                <option value="white">White</option>
                            </select>
                        </div>
                    </div>
                    <div className="card">
                    { Categories.length>0?<b>Top Product Results:</b>:<b>OOPS! No Results Found</b>}
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
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    );
   
}

export default List


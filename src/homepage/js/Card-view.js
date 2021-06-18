import React from 'react';
import '../css/Card-view.css';
import {useHistory} from 'react-router-dom'; 

 


function CardView(props){ 

    var types=props.type
    var hist=useHistory();

    function Al(caty){
        types==="product"?hist.push('/prod'):hist.push('/list/'+caty);
      }  
       
        const Categories= props.data;
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
                    {items.price ?<h3>Price: {items.price}</h3> :<button onClick={()=>Al(items.category)}>view</button>}
                    </section>   
                
                </section>        
            ))} 
            </div>       
        );
    }      

export default CardView
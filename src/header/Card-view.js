import React from 'react';
import './Card-view.css';
import Categories from './Data.js';

const al=(caty)=>{
    alert(caty);
}    

class CardView extends React.Component {        
    render(){
        return(
            <div>
            {Categories.map((items)=>(
                <section className="card-container">                    
                    
                    <section className="card-title">
                        {items.category}
                    </section>   
                    <section className="card-image">
                        <img src={items.image} alt="card-img"/>          
                    </section>
                    <section className="card-button">
                        <button onClick={()=>al(items.category)}>View</button>
                    </section>   
                
                </section>        
            ))} 
            </div>       
        );
    }      
} 

export default CardView
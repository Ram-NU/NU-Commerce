import React from 'react';
import './Card-view.css';
import image1 from '../header/main-background.jpg';
import Categories from './Data.js';

const al=()=>{
    alert("Hai!");
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
                        <img src={image1} alt="card-img"/>          
                    </section>
                    <section className="card-button">
                        <button onClick={al}>View</button>
                    </section> 
                    
                </section>        
            ))} 
            </div>       
        );
    }      
} 

export default CardView
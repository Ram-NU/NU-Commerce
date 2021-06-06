import React from 'react';
import '../css/Card-view.css';
//import Categories from './Data.js';

const al=(caty)=>{
    alert(caty);
}    


class CardView extends React.Component {  
       
    render(){
        const Categories= this.props.data;
        return(
            <div>
            {Categories.map((items,index)=>(
                <section className="card-container" key={index}>                    
                    
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
import React from 'react';
import './Category.css';
import Categories from './Data.js';

const al=()=>{
    alert("NU!");
}    
  
class Category extends React.Component {
    render(){
        return(

            <div className="d-flex justify-content-around category">
                
                {Categories.map((items)=>(
                    <div className="inner-offer" onMouseEnter={al}>
                        <b >{items.category}</b>
                    </div>
                ))} 
                
            </div>

        );
    }
}

export default Category
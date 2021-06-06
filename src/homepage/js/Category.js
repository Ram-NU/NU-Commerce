import React from 'react';
import '../css/Category.css';
import Categories from './Data.js';

const al=()=>{
    //alert("NU!");
}    
  
class Category extends React.Component {
    render(){
        return(

            <div className="d-flex justify-content-around category">
                
                {Categories.map((items,index)=>(
                    <div className="inner-offer" onMouseEnter={al} key={index}>
                        <b>{items.category}</b>
                    </div>
                ))} 
                
            </div>

        );
    }
}

export default Category
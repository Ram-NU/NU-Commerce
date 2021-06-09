import React from 'react';
import '../css/Category.css';
import Categories from './Data.js';

const al=(caty)=>{
    alert(caty);
}    
  
class Category extends React.Component {
    render(){
        return(

            <div className="category">
               
                    {Categories.map((items,index)=>(
                        <div className="inner-offer" onClick={()=>{al(items.category)}} key={index}>
                            <b>{items.category}</b>
                        </div>
                    ))} 
                </div>
                
           

        );
    }
}

export default Category
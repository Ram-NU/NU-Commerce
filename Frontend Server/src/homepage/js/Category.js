import React from 'react';
import '../css/Category.css';
import Categories from './Data.js';
import {useHistory} from 'react-router-dom';

    
  
function Category() {

    var hist=useHistory();

    const al=(caty)=>{
        hist.push('/list/'+caty);
    }
  
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

export default Category
import React from 'react';
import './Card-view.css';
import image1 from 'C:/react/NU-Commerce/src/header/main-background.jpg';

const al=()=>{
    alert("Hai!");
}    

class CardView extends React.Component {
    render(){
        return(
            <div className="card-container">
                <div className="card-title">
                    Electronics
                 </div>   
                <div className="card-image">
                    <img src={image1} alt="card-img"/>          
                </div>
                <div className="card-button">
                    <button className onClick={al}>View</button>
                </div>        
            </div>    
        );
    }      
} 

export default CardView
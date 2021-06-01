import React from 'react';
import './Body_home.css';
import CardView from './Card-view.js'; 

const al=()=>{
    alert("Hai!");
}    

class Bodyhome extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="bg-img">
                    <img src="" alt=""/>
                 </div>   
                <div className="message">
                    <p>
                        Welcome to NU Commerce! Enjoy purchasing this week full of offer upto 50% Click here:
                        <a onClick={al}>NU-Commerce.com</a>
                    </p>
                </div>    
                <div className="container">
                   <CardView/>
                </div>
            </div>
        );
    }    
}

export default Bodyhome

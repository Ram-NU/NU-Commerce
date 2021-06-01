import React from 'react';
import './Body_home.css';
import Card_view from './Card_view.js';   

class Bodyhome extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="container">
                   <Card_view/>
                </div>
            </div>
        );
    }    
}

export default Bodyhome

import React from 'react';
import Navigation from '../js/Navigation.js';
import Category from '../js/Category.js';
import Bodyhome from '../js/Bodyhome.js';

class Homepage extends React.Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Category/>
                <Bodyhome/>
            </div>
        );
    }     
} 

export default Homepage
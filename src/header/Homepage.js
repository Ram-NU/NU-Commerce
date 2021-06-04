import React from 'react';
import Navigation from './Navigation.js';
import Category from './Category.js';
import Bodyhome from './Bodyhome.js';


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
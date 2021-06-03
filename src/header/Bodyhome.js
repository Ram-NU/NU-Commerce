import React from 'react';
import './Body_home.css';
import CardView from './Card-view.js'; 
import Slideshow from './Slideshow.js';
import image from './slider.jpg';
import image1 from './slider1.jpg';
import Footer from './Footer.js';
import images from './main-background.jpg';
import images1 from './main-background1.jpg';
import images2 from './main-background2.jpg';

   

const url="https://nutechnologyinc.com";

class Bodyhome extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="bg-img">
                    <Slideshow image={images} image1={images1} image2={images2}/>
                </div>   
                <div className="message">
                    <p>
                        Welcome to NU Commerce! Enjoy purchasing this week full of offer upto 50% Click here:
                        <a href={url}> NU-Commerce Official Website</a>
                    </p>
                </div>    
                <div className="container">
                   <CardView/>
                </div>
                <div className="sliders">
                    <div className="heading">
                        <b>Men Shirts 50% off!</b>
                    </div>
                    <Slideshow image={image} image1={image} image2={image} /> 
                </div>
                <div className="sliders">
                    <div className="heading">
                        <b>Women Clothings 50% off!</b>
                    </div>
                    <Slideshow image={image1} image1={image1} image2={image1} /> 
                </div>
                <div className="footer">
                    <Footer/>
                </div>    

            </div>
        );
    }    
}

export default Bodyhome

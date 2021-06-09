import React from 'react';
import '../css/Body_home.css';
import CardView from '../js/Card-view.js'; 
import Slideshow from '../js/Slideshow.js';
import image from '../img/slider.jpg';
import image1 from '../img/slider1.jpg';
import Footer from '../js/Footer.js';
import images from '../img/main-background.jpg';
import images1 from '../img/main-background1.jpg';
import images2 from '../img/main-background2.jpg';
import Category from './Data.js';

   

const url="https://nutechnologyinc.com";

class Bodyhome extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="bg-img">
                    <Slideshow image={images} image1={images1} image2={images2} time="10s"/>
                </div>   
                <div className="message">
                    <p>
                        Welcome to NU Commerce! Enjoy purchasing this week full of offer upto 50% Click here:
                        <a href={url}> NU-Commerce Official Website</a>
                    </p>
                </div>    
                <div className="container">
                   <CardView data={Category} />
                </div>
                <div className="sliders">
                    <div className="heading">
                        <b>Men Shirts 50% off!</b>
                    </div>
                    <Slideshow image={image} image1={image} image2={image} time="15s"/> 
                </div>
                <div className="sliders">
                    <div className="heading">
                        <b>Women Clothings 50% off!</b>
                    </div>
                    <Slideshow image={image1} image1={image1} image2={image1} time="10s"/> 
                </div>
                <div className="footer">
                    <Footer/>
                </div>    

            </div>
        );
    }    
}

export default Bodyhome

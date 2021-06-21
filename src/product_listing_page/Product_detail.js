import React, { Component} from 'react';
import Navigation from '../homepage/js/Navigation';
import Category from '../homepage/js/Category';
import Footer from '../homepage/js/Footer';
import './css/Product_detail.css';
import redmi from './img/redmi_note_10.jpg'
import redmii from './js/Redmii.js';
import Details from './js/Details'
import CardView from '../homepage/js/Card-view';


const buttons=(opt)=>{
    alert(opt);
}   
    

class Productdetail extends Component {
    render() {
        return (
            <div className="prod">
                <Navigation/>
                <Category/>
                <div className="prod_list">   
                    <div>
                        <br/><b>{redmii.product}</b>
                    </div>
                    
                    <div className="details">
                        <div className="image">
                            <img src={redmi} alt="img"/>
                        </div> 
                
                        <div className="det">
                            <b>{redmii.prod1}</b><br/><br/>
                            <b>Price: {redmii.price}</b>
                            <div className="specs">
                                <p><br/><b>Brand: </b>{redmii.brand}</p>
                                 <p><b>Color: </b>{redmii.color[0]},{redmii.color[1]}</p><br/>
                                 <p><b>About: </b>{redmii.spec1}</p>
                            </div>
                            <br/>
                            <button onClick={()=>{buttons("Added to Cart")}}>Add to cart</button>
                            <button onClick={()=>{buttons("Buy")}}>Buy</button>
                        </div> 
                    </div>  
            
                </div>

                <div className="others">
                    <b>Related Products:</b>
                    <CardView data={Details.electronics} type="product"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Productdetail;
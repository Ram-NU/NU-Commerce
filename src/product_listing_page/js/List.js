import Navigation from 'C:/react/NU-Commerce/src/homepage/js/Navigation.js';
import Category from 'C:/react/NU-Commerce/src/homepage/js/Category.js';
import Cardview from 'C:/react/NU-Commerce/src/homepage/js/Card-view.js';
import Footer from 'C:/react/NU-Commerce/src/homepage/js/Footer.js';
import 'C:/react/NU-Commerce/src/homepage/js/Card-view.js';
import '../css/List.css';
import Data from './Details.js'
import React from 'react';


class List extends React.Component {

   render(){
        return(
            <React.Fragment>
                <Navigation/>
                <Category/>
                <div className="body">
                    <div className="content">
                        <div className="filter">
                            <br/><br/>
                           <b>Filters</b><br/><br/>
                           <div className="fil-elt">
                           <b>Brand</b><br/>
                                <input type="radio" name="Brand" value="Redmi"/>
                                <label>Redmi</label><br/>
                                <input type="radio" name="Brand" value="Oneplus"/>
                                <label> One Plus</label><br/>
                                <input type="radio" name="Brand" value="Oppo"/>
                                <label> Oppo</label><br/><br/>
                                <b>Price</b><br/><br/>
                           </div>
                           <div className="amount">
                                <b>Min -</b>
                                <input type="text" name="min" id="min" width="25%"/>
                                <b>Max -</b>
                                <input type="text" name="max" id="max" width="25%"/>
                           </div><br/><br/>
                           <div className="color">
                                <b>Colors</b><br/><br/>
                                <select id="col" name="col">
                                    <option value="green">Green</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="black">Black</option>
                                    <option value="white">White</option>
                                </select>
                           </div>
                        </div>
                        <div className="card">
                        <b>Top Search Results: Electronics</b>
                            <Cardview data={Data} />
                        </div>
                    </div>
                    <Footer/>
                </div>
            </React.Fragment>
        );
   }
}

export default List


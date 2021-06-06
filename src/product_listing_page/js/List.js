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
                    <div className="filter">
                        Filters
                    </div>
                    Top Search Results: Electronics
                    <div className="card">
                        <Cardview data={Data}/>
                    </div>
                    <Footer/>
                </div>
            </React.Fragment>
        );
   }
}

export default List

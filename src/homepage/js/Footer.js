import React from 'react';
import '../css/Footer.css';
import Category from './Category.js';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Category/>
                <div className="address">
                    <div className="position">
                       <b> Address:<br/>
                            56/45 fort street, <br/>
                            Velacherry cross road, <br/>
                            Guindy, <br/>
                            Chennai-600045.<br/>
                            E-mail: vickyram2802@gmail.com</b>
                    </div> 
                </div>     
            </div>    
        );
    }
}       

export default Footer 
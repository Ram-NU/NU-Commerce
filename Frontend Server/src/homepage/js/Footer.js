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
                            46/23 TVKS Street, <br/>
                            Near new bus-stand, <br/>
                            Rasipuram, <br/>
                            Namakkal-637408.<br/>
                            E-mail: vickyram2802@gmail.com</b>
                    </div> 
                </div>     
            </div>    
        );
    }
}       

export default Footer 
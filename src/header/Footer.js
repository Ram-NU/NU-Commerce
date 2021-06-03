import React from 'react';
import Category from './Category.js';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer1">
                <Category/>
                <div className="address">
                    <b className="position">
                        Address:<br/>
                            56/45 fort street, <br/>
                            Velacherry cross road, <br/>
                            Guindy, <br/>
                            Chennai-600045.<br/><br/>
                            E-mail: vickyram2802@gmail.com
                    </b> 
                </div>     
            </div>    
        );
    }
}       

export default Footer 
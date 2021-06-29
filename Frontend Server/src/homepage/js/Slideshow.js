import React from 'react';
import '../css/Slideshow.css';

class Slideshow extends React.Component { 
    render(){ 
        return(
            <div className="slider">
                <figure style={{animation:this.props.time+" slider infinite"}}>
                    <img src={this.props.image} alt="hai"/>
                    <img src={this.props.image1} alt="hai"/>
                    <img src={this.props.image2} alt="hai"/>
                </figure>
			</div>
        );
    }    
}

export default Slideshow

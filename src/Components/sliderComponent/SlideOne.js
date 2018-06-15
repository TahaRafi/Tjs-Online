import React, { Component } from 'react';
import  Image  from '../images/focus.jpg';

const SlideOne= (props) => {
    let background = {
        backgroundImage: "url(" + Image + ")",

        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide" class="card-header-img"></div>
}

export default SlideOne;
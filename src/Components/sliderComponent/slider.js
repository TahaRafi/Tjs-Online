import React, { Component } from 'react';
import SlideOne from './SlideOne';

import SlideTwo from './SlideTwo';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';


import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowAltCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowAltCircleLeft';
import faArrowAltCircleRight from '@fortawesome/fontawesome-free-solid/faArrowAltCircleRight';


export default class Slider extends Component {



    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    render() {



        return (
            <div className="slider">

                {/* Slides go here */}
                { this.state.slideCount === 1 ? <SlideOne /> : null }
                { this.state.slideCount === 2 ? <SlideTwo /> : null }

                {/* Arrow Functionality */}
                <div class="div1">
                    <i><FontAwesomeIcon  style={{fontSize:'2em' }} icon={faArrowAltCircleLeft}  onClick={this.previousSlide} /></i>
                    <i><FontAwesomeIcon  style={{fontSize:'2em'}} icon={faArrowAltCircleRight} onClick={this.nextSlide}/></i>
                </div>



            </div>
        );
    }
     nextSlide() {
        console.log("nextSlide");
        if(this.state.slideCount<2)
        {
            this.setState({ slideCount: this.state.slideCount + 1 })
        }

    }

    previousSlide() {
        console.log("prevSlide");
        if(this.state.slideCount >1)
        {
            this.setState({ slideCount: this.state.slideCount - 1 })
        }
    }
}
import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import faArrowAltCircleRight from '@fortawesome/fontawesome-free-solid/faArrowAltCircleRight';

const RightArrow = (props) => {


    return (
        <div  onClick={props.nextSlide} class="div2" >
            {/*<i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>*/}
            <i><FontAwesomeIcon style={{fontSize:'3em'}} icon={faArrowAltCircleRight} /></i>
        </div>
    );
}

export default RightArrow;
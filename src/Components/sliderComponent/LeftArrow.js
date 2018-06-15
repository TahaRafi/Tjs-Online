import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import faArrowAltCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowAltCircleLeft';

const LeftArrow = (props) => {



    return (
        <div  class="div1" onClick={props.previousSlide}>
            <i><FontAwesomeIcon style={{fontSize:'3em'}} icon={faArrowAltCircleLeft} /></i>
        </div>
    );
}

export default LeftArrow ;
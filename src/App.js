import React, { Component } from 'react';
import './Assets/css/default.min.css';
import  './Assets/styles/layout/layout.css';
import  './Assets/styles/layout/about.css';
import  './Assets/styles/layout/tutorials.css';
import  './Assets/styles/layout/about.css';
// import  './Assets/scripts/jquery.min.js';
// import './Assets/scripts/jquery.backtotop.js';
// import './Assets/scripts/jquery.mobilemenu.js';
// import './Assets/scripts/jquery.flexslider-min.js';


import {Route  } from "react-router-dom";

import Header from './Components/headerComponent/header';
import Slider from './Components/sliderComponent/slider';
import Pages  from './Components/pagesComponent/homePage/pages';
import  Footer from './Components/footerComponent/footer';
import Routing from './Components/routingComponent/routing';
import JavaHome from "./Components/pagesComponent/javaTutorialsPage/Tutorials";
import AboutUs from  "./Components/pagesComponent/aboutUs/aboutUs";
import Contact  from "./Components/pagesComponent/contactUs/contact"

class App extends Component {
    render() {
        return (
            <div>
            <Route exact path="/" component={Pages} />
            </div>
        );
    }
}

export default App;

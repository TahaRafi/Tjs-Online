import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Header from "../../headerComponent/header";
import  Footer from '../../footerComponent/footer';
import Slider from '../../sliderComponent/slider';
 import TutorialsPage from "../javaTutorialsPage/tutorialsPage";
import AboutUs from  "../../pagesComponent/aboutUs/aboutUs";

class Tutorials extends Component {


    constructor(props) {
        super(props);
        this.state = {
            redirectDesc: false,
            redirectTutorials:false
        };
    }



    handleOnClick = (index) => {
        console.log("hey");
        if(index==1)
        {
            this.setState({redirectDesc: true});
        }
        else {
            this.setState({redirectTutorials: true});
        }
    }

    render() {
        var pageData = [];
        var pageDatagetfromDb = [
            {"name": "JAVA 8", "desc": "This", "link": "#"},
            {"name": "JAVA 1", "desc": "This is Java course", "link": "#"},
            {"name": "JAVA 22", "desc": "This is Java course", "link": "#"}
        ];

        for (var i = 0; i < pageDatagetfromDb.length; i++) {
            pageData.push(
                <li class="one_third active">
                    <article class="bgded overlay" >
                        <div class="txtwrap"><i class="block fa fa-4x fa-apple"></i>
                            <h6 class="heading">{pageDatagetfromDb[i].name}</h6>
                            <p>{pageDatagetfromDb[i].desc}&hellip;</p>
                        </div>
                        <footer>
                            <Router>
                                <div>
                                    <ul>
                                        <li onClick={() => this.handleOnClick (1)}><Link to="/description">Description</Link></li>
                                        <li onClick={() => this.handleOnClick (0)}><Link to="/tutorial">link</Link></li>
                                    </ul>


                                </div>
                            </Router>
                        </footer>
                    </article>
                </li>
            )
        }



        if (this.state.redirectDesc) {
            return  <Router>
                <div>
                    <Route path="/description" component={AboutUs} />
                </div>
            </Router>

        }

        if (this.state.redirectTutorials) {
            return  <Router>
                <div>
                    <Route path="/tutorial" component={TutorialsPage} />
                </div>
            </Router>

        }

        return (
            <tutorials>

                <Header/>
                <Slider/>

                <div class="wrapper row3">
                    <main class="hoc container clear">
                        <div class="btmspace-80 center">
                            <h3 class="nospace">Dignissim dictum consequat</h3>
                            <p class="nospace">Erat in diam eu placerat purus est ac nisi integer sed rutrum dictum.</p>
                        </div>
                        <ul class="nospace group services">
                            {pageData}
                        </ul>
                        <div class="clear"></div>
                    </main>

                </div>

                <Footer/>


            </tutorials>
        );
    }
}

export default Tutorials;

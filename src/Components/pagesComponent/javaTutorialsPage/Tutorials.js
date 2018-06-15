import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "../../headerComponent/header";
import  Footer from '../../footerComponent/footer';
import Slider from '../../sliderComponent/slider';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import tutorialpage from "../javaTutorialsPage/tutorialsPage";

class Tutorials extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectTutorials:false
        };
    }


    handleOnClick = () => {
        console.log("hey");
        this.setState({redirectTutorials: true});
    }


    render() {
        var pageData = [];
        var pageDatagetfromDb = [
            {"name": "JAVA", "desc": "This is Java course", "link": "#","img" : "https://preview.ibb.co/cDM5L8/java.png"},
            {"name": "JAVA", "desc": "This is Java course", "link": "#","img" : "https://preview.ibb.co/cDM5L8/java.png"},
            {"name": "JAVA", "desc": "This is Java course", "link": "#","img" : "https://preview.ibb.co/cDM5L8/java.png"}
        ];



        for (var i = 0; i < pageDatagetfromDb.length; i++) {
            pageData.push(
                <Router>
                    <li class="one_third">
                        <article class="bgded overlay" style={{backgroundImage: "url(" + pageDatagetfromDb[i].img + ")"}}>
                            <div class="txtwrap" >
                                <i><FontAwesomeIcon style={{fontSize:'5em'}} icon={faGraduationCap} /></i>
                                <p >{pageDatagetfromDb[i].name}</p>
                                <p>{pageDatagetfromDb[i].desc}&hellip;</p>
                                <p ><li onClick={() => this.handleOnClick ()}><Link to="/tutorial"><u>Link</u></Link></li> </p>
                            </div>
                        </article>
                    </li>
                </Router>

            )
        }

        if (this.state.redirectTutorials) {
            return  <Router>
                <div>
                    <Route path="/tutorial" component={tutorialpage} />
                </div>
            </Router>

        }

        return (
            <tutorials>

                <Header/>


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

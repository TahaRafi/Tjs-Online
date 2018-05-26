import React, { Component } from 'react';


import Header from "../../headerComponent/header";
import  Footer from '../../footerComponent/footer';
import Slider from '../../sliderComponent/slider';
import Tutorials from "../javaTutorialsPage/Tutorials";
import AboutUs from  "../../pagesComponent/aboutUs/aboutUs";
import  Image  from '../../images/focus.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';

class Pages extends Component {




    render() {
        var pageData = [];
        var pageDatagetfromDb = [
            {"name": "JAVA", "desc": "This is Java course", "link": "#"},
            {"name": "Pyhthon", "desc": "This is Java course", "link": "#"},
            {"name": "Mongodb", "desc": "This is Java course", "link": "#"},
            {"name": "Mongodb", "desc": "This is Java course", "link": "#"},
            {"name": "Mongodb", "desc": "This is Java course", "link": "#"},
            {"name": "Mongodb", "desc": "This is Java course", "link": "#"},
            {"name": "Mongodb", "desc": "This is Java course", "link": "#"}
        ];



        for (var i = 0; i < pageDatagetfromDb.length; i++) {
            pageData.push(
                <li class="one_third">
                    <article class="bgded overlay" style={{backgroundImage: "url(" + Image + ")"}}>
                        <div class="txtwrap" >
                            <i><FontAwesomeIcon style={{fontSize:'5em'}} icon={faGraduationCap} /></i>
                            <p >Malesuada</p>
                            <p>Lacus donec molestie sodales ut nunc felis malesuada quis semper fringilla&hellip;</p>
                        </div>

                    </article>
                </li>
            )
        }



        return (
            <pages>

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


            </pages>
        );
    }
}

export default Pages;

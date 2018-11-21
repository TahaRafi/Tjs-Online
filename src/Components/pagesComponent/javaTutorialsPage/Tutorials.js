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
            redirectTutorials:false,
            error: null,
            isLoaded: false,
            data: null,
            pageDatagetfromDb: [],
            pageData: [],
            genericId: null
        };
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        fetch("http://localhost:80/getAllGenericCourses?mode=1")
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                    console.log('data',this.state.data);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    handleClick = ({currentTarget}) => {
        console.log("id",currentTarget.value);
        this.setState({redirectTutorials: true, genericId : currentTarget.value });
    }


    render() {



        if ( this.state.data != undefined ) {
            this.state.pageDatagetfromDb = this.state.data.responseObject ;


            for (var i = 0; i < this.state.pageDatagetfromDb.length; i++) {
                this.state.pageData.push(
                    <Router>

                        <li class="one_third">
                            <article class="bgded overlay"
                                     style={{backgroundImage: "url(" + "https://preview.ibb.co/cDM5L8/java.png" + ")"}}>
                                <div class="txtwrap">
                                    <i><FontAwesomeIcon style={{fontSize: '5em'}} icon={faGraduationCap}/></i>
                                    <p>{this.state.pageDatagetfromDb[i].courseName}</p>
                                    <p>{this.state.pageDatagetfromDb[i].courseDesc}&hellip;</p>
                                    <p>
                                        <li value={this.state.pageDatagetfromDb[i].id} onClick={this.handleClick}><Link to="/tutorial"><u>Link</u></Link>
                                        </li>
                                    </p>
                                </div>
                            </article>
                        </li>
                    </Router>
                )
            }
        }



        if (this.state.redirectTutorials) {
            return <Router>
                <div>
                    {/*<Route path="/tutorial"  component={Tutorials} genericId={this.state.genericId} />*/}
                    <Route path="/tutorial"  render={(routeProps) => (<tutorialpage genericId={this.state.genericId} />)} />

                </div>
            </Router>

        }


        const {error, isLoaded} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded ) {
            return <div>Loading...</div>;
        }else {

            return (
                <pages>
                    <Header/>

                    <div class="wrapper row3">
                        <main class="hoc container clear">
                            <div class="btmspace-80 center">
                                <h3 class="nospace">Dignissim dictum consequat</h3>
                                <p class="nospace">Erat in diam eu placerat purus est ac nisi integer sed rutrum dictum.</p>
                            </div>
                            <ul class="nospace group services">
                                {this.state.pageData}
                            </ul>
                            <div class="clear"></div>
                        </main>

                    </div>

                    <Footer/>


                </pages>
            );
        }

    }
}

export default Tutorials;

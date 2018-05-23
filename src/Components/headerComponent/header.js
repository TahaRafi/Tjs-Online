import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Pages  from '../../pagesComponent/homePage/pages';
// import AboutUs from  "../../pagesComponent/aboutUs/aboutUs";

import AboutUs from  "../../Components/pagesComponent/aboutUs/aboutUs";
import Pages  from '../../Components/pagesComponent/homePage/pages';
import Contact  from "../../Components/pagesComponent/contactUs/contact";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectHome: false,
            redirectAboutUs:false,
            redirectContactUs:false
        };
    }



    handleOnClick = (index) => {
        console.log("hey");
        if(index==1)
        {
            this.setState({redirectHome: true});
        }
        else if(index==2){
            this.setState({ redirectAboutUs: true});
        }
        else {
            this.setState({  redirectContactUs: true});
        }
    }


    render() {

        var pageData = [];

        // pageData.push(
        //     <Router>
        //         <div class="wrapper row1">
        //             <header id="header" class="hoc clear">
        //                 <div id="logo" class="fl_left">
        //                     <h1><a><Link to="/home">TJS Online</Link></a></h1>
        //                 </div>
        //                 <nav id="mainav" class="fl_right">
        //                     <div>
        //                         <ul class="clear">
        //                             <li class="active" onClick={() => this.handleOnClick (1)} ><a> <Link to="/home">Home</Link></a></li>
        //                             <li onClick={() => this.handleOnClick (2)}><a> <Link to="/aboutus">About US</Link></a>
        //                             </li>
        //                             <li onClick={() => this.handleOnClick (3)}><a><Link to="/contact">Contact Us</Link></a></li>
        //                         </ul>
        //                     </div>
        //
        //                 </nav>
        //             </header>
        //             <Route path="/home" component={Pages} />
        //         </div>
        //     </Router>
        //
        // );


        pageData.push(
            <Router>
                <div class="wrapper row1">
                    <header id="header" class="hoc clear">
                        <div id="logo" class="fl_left">
                            <h1><a><Link to="/home">TJS Online</Link></a></h1>
                        </div>
                        <nav  class="fl_right">
                            <div>

                                   <a> <Link to="/home">Home</Link></a>&nbsp;
                                   <a> <Link to="/aboutus">About US</Link></a>&nbsp;
                                   <a><Link to="/contact">Contact Us</Link></a>&nbsp;
                                   <a> <Link to="/home">Articles</Link></a>&nbsp;
                                   <a> <Link to="/aboutus">Subscirbe</Link></a>&nbsp;
                            </div>

                        </nav>
                    </header>
                    <Route path="/home" component={Pages} />
                </div>
            </Router>

        );

        if (this.state.redirectHome) {
            this.state = {
                redirectHome: false,
                redirectAboutUs:false,
                redirectContactUs:false
            };
            return  <Router>
                <div>
                    <Route path="/home" component={Pages} />
                </div>
            </Router>

        }

        if (this.state.redirectAboutUs) {
            this.state = {
                redirectHome: false,
                redirectAboutUs:false,
                redirectContactUs:false
            };
            return  <Router>
                <div>
                    <Route path="/aboutus" component={AboutUs} />
                </div>
            </Router>

        }


        if (this.state.redirectContactUs) {
            this.state = {
                redirectHome: false,
                redirectAboutUs:false,
                redirectContactUs:false
            };
            return  <Router>
                <div>
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>

        }

        return (
            <header>

                {pageData}

            </header>
        );
    }
}

export default Header;

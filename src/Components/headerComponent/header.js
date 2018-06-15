import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, HashRouter } from "react-router-dom";



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

        pageData.push(
            <Router>
                <div class="wrapper row1">
                    <header id="header" class="hoc clear">
                        <div id="logo" class="fl_left">
                            <h1><a><Link to="/home">TJS Online</Link></a></h1>
                        </div>
                        <nav id="mainav" class="fl_right">
                            <div>
                                <ul class="clear">
                                    <li class="active" onClick={() => this.handleOnClick ()} >Home</li>
                                    <li onClick={() => this.handleOnClick ()}> <Link to="/aboutus">About US</Link></li>
                                    <li onClick={() => this.handleOnClick ()}><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>

                        </nav>
                    </header>
                </div>
            </Router>

        );


        // pageData.push(
        //     <Router>
        //         <div class="wrapper row1">
        //             <header id="header" class="hoc clear">
        //                 <div id="logo" class="fl_left">
        //                     <h1><a><Link to="/home">TJS Online</Link></a></h1>
        //                 </div>
        //                 <nav  class="fl_right">
        //                     <div>
        //
        //                            <a href=""> Home</a>&nbsp;
        //                            <a href=""> About US</a>&nbsp;
        //                            <a href=""> Contact Us</a>&nbsp;
        //                            <a href=""> Subscirbe</a>&nbsp;
        //
        //                         {/*<li><Link to="/home">Home</Link></li>*/}
        //                         {/*<li><Link to="/aboutus">Stuff</Link></li>*/}
        //                         {/*<li><Link to="/contact">Contact</Link></li>*/}
        //                          {/*<div>*/}
        //                              {/*<Route path="/home" component={Pages}/>*/}
        //                              {/*<Route path="/aboutus" component={AboutUs}/>*/}
        //                              {/*<Route path="/contact" component={Contact}/>*/}
        //                          {/*</div>*/}
        //                     </div>
        //
        //                 </nav>
        //             </header>
        //         </div>
        //     </Router>
        //
        // );

        if (this.state.redirectHome) {
            return  <Router>
                <div>
                    <Route path="/home" component={Pages} />
                </div>
            </Router>

        }

        if (this.state.redirectAboutUs) {
            return  <Router>
                <div>
                    <Route path="/aboutus" component={AboutUs} />
                </div>
            </Router>

        }


        if (this.state.redirectContactUs) {
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

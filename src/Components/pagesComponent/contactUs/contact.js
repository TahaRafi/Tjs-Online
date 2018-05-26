import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "../../headerComponent/header";
import  Footer from '../../footerComponent/footer';

class Contact extends Component {




    render() {
        return (

            <contact>
             <Header/>
                {/*<head>*/}
                    {/*<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>*/}
                    {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>*/}
                {/*</head>*/}
                <section id="contact" class="content-section text-center" style={{backgroundColor: "#f8f9fa"}}>
                    <div class="contact-section">
                        <div class="container">
                            <h2>Contact Us</h2>
                            <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>
                            <div>
                                <div>
                                    <form class="form-horizontal">
                                        <div class="form-group">
                                            <label for="exampleInputName2">Name</label>
                                            <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail2">Email</label>
                                            <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"></input>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputText">Your Message</label>
                                            <textarea  class="form-control" placeholder="Description"></textarea>
                                        </div>
                                        <button type="button" class="btn btn-success">Send Message</button>
                                    </form>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>

                        <h2>Time of Reply</h2>
                        <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>

                    </div>
                </section>
         <Footer/>
            </contact>
        );
    }
}

export default Contact;

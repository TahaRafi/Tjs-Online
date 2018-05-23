import React, { Component } from 'react';
import Header from "../../headerComponent/header";
import  Footer from '../../footerComponent/footer';
import  Image  from '../../images/focus.jpg';


class AboutUs extends Component {
    render() {
        var pageData = [];
        var pageDatagetfromDb = [
            {"heading": "Generic", "subheading": "This is Java course", "minicontent": "Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.", "content": "Curabitur venenatis lorem ut finibus finibus. Ut quis eleifend libero, nec ultricies metus. Morbi magna risus, congue sit amet pellentesque eget, malesuada ut justo. Sed ac pretium quam. Ut vel ex vitae enim sagittis posuere ac id erat. Vestibulum vel ullamcorper tellus. Donec sapien massa, venenatis ac felis vel, vestibulum sagittis enim. Maecenas ut egestas lorem, nec luctus ligula. Vestibulum neque diam, aliquet non enim a, cursus lacinia metus. Aenean fringilla luctus rhoncus. Integer vulputate massa ac suscipit venenatis. Integer luctus elit non nulla fringilla, ullamcorper maximus sem congue. Integer tristique eu nisi nec fermentum. Ut malesuada quis massa at ultricies."}
        ];



        pageData.push(
            <div >

                <section class="wrapper1">
                    <div class="inner">
                        <header class="align-center">
                            <h1>{pageDatagetfromDb[0].heading}</h1>
                            <p>{pageDatagetfromDb[0].minicontent}</p>
                        </header>
                        <div class="flex flex-2">
                            <div class="col col2">
                                <h3>{pageDatagetfromDb[0].subheading}</h3>
                                <p>{pageDatagetfromDb[0].content}</p>
                            </div>
                            <div class="col col1 first">
                                <div class="image round fit">
                                    <a href="generic.html" class="link"><img src={Image} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )

        return (
               <aboutus>
                   <Header/>
                   {pageData}
                   <Footer/>
               </aboutus>
        );
    }
}

export default  AboutUs;

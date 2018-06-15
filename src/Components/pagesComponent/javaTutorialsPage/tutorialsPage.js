import React, { Component, Text, View, Button} from 'react';
import Header from "../../headerComponent/header";
import  Footer from '../../footerComponent/footer';
import faGraduationCap from "@fortawesome/fontawesome-free-solid/faGraduationCap";



class TutorialsPage extends Component {

    render() {

        var pageDatagetfromDb=[];
        var pageData=[];


        pageDatagetfromDb =
            [
                {"content" : "     <u>   <h7>Welcome to Java Tutoirals</h7></u><br></br>\n" +
                    "                                            <p1>Mauris ultricies neque nec augue. Aenean vehicula. Ut dictum. Vivamus placerat diam nec velit. Suspendisse ornare. Ut viverra. Mauris sagittis nisl sed ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.\n" +
                    "                                            Mauris ultricies neque nec augue. Aenean vehicula. Ut dictum. Vivamus placerat diam nec velit. Suspendisse ornare. Ut viverra. Mauris sagittis nisl sed ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Suspendisse est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus placerat metus eu urna. Etiam dictum. Aliquam eu dui eu ante euismod tristique. Donec posuere augue varius mi. Nunc erat ligula, ultrices eu, ultrices sed, sodales ut, magna. Mauris ultricies neque nec augue.\n" +
                    "                                            <blockquote>This template has been tested in Mozilla Firefox and IE7. The page validates as XHTML 1.0 Transitional using valid CSS. It will work in browser widths of 800x600, 1024x768 &amp; 1280x1064. The images used in this template are courtesy of <a href=\"http://www.sxc.hu/\" title=\"free images\">stock xchng</a>. The top navigation menu is from <a href=\"http://www.13styles.com/\" title=\"free CSS menus\">13 Styles</a> and has been amended to suit this template. For more FREE CSS templates visit <a href=\"http://www.mitchinson.net\">my website</a>.</blockquote>\n" +
                    "                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse in odio et nibh volutpat eleifend. Donec rutrum, risus sed auctor malesuada, augue felis placerat neque, vel vestibulum odio erat eget felis. Phasellus id mauris eu urna sagittis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris elementum elit et ipsum. Cras ornare magna eu felis. Morbi convallis. Nunc fermentum, odio sed ornare ultricies, urna odio egestas sem, vel scelerisque nisi neque vitae lectus. Proin dolor. Vestibulum condimentum urna dignissim arcu. Nullam interdum. Proin lacinia, magna ut scelerisque facilisis, augue sem tempor purus, consequat suscipit tellus ligula et justo. Nam magna. Donec magna sapien, aliquam non, egestas eu, hendrerit nec, quam. Donec commodo auctor lectus. Suspendisse rhoncus. Proin tincidunt euismod nisi. Cras nibh ante, ultrices non, placerat quis, placerat id, est. Suspendisse sed quam volutpat lacus faucibus venenatis.</p1><br></br>\n"},
                {"content" : "\n" +
                    "\n" +
                    "                                        <u>   <h7>Welcome to <span >Ruby</span> Template</h7></u><br></br>\n" +
                    "                                        <p1>Mauris ultricies neque nec augue. Aenean vehicula. Ut dictum. Vivamus placerat diam nec velit. Suspendisse ornare. Ut viverra. Mauris sagittis nisl sed ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. </p1>\n" +
                    "                                        <p1>Mauris ultricies neque nec augue. Aenean vehicula. Ut dictum. Vivamus placerat diam nec velit. Suspendisse ornare. Ut viverra. Mauris sagittis nisl sed ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Suspendisse est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus placerat metus eu urna. Etiam dictum. Aliquam eu dui eu ante euismod tristique. Donec posuere augue varius mi. Nunc erat ligula, ultrices eu, ultrices sed, sodales ut, magna. Mauris ultricies neque nec augue. </p1>\n" +
                    "                                        <blockquote>This template has been tested in Mozilla Firefox and IE7. The page validates as XHTML 1.0 Transitional using valid CSS. It will work in browser widths of 800x600, 1024x768 &amp; 1280x1064. The images used in this template are courtesy of <a href=\"http://www.sxc.hu/\" title=\"free images\">stock xchng</a>. The top navigation menu is from <a href=\"http://www.13styles.com/\" title=\"free CSS menus\">13 Styles</a> and has been amended to suit this template. For more FREE CSS templates visit <a href=\"http://www.mitchinson.net\">my website</a>.</blockquote>\n" +
                    "                                        <p1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse in odio et nibh volutpat eleifend. Donec rutrum, risus sed auctor malesuada, augue felis placerat neque, vel vestibulum odio erat eget felis. Phasellus id mauris eu urna sagittis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris elementum elit et ipsum. Cras ornare magna eu felis. Morbi convallis. Nunc fermentum, odio sed ornare ultricies, urna odio egestas sem, vel scelerisque nisi neque vitae lectus. Proin dolor. Vestibulum condimentum urna dignissim arcu. Nullam interdum. Proin lacinia, magna ut scelerisque facilisis, augue sem tempor purus, consequat suscipit tellus ligula et justo. Nam magna. Donec magna sapien, aliquam non, egestas eu, hendrerit nec, quam. Donec commodo auctor lectus. Suspendisse rhoncus. Proin tincidunt euismod nisi. Cras nibh ante, ultrices non, placerat quis, placerat id, est. Suspendisse sed quam volutpat lacus faucibus venenatis.</p1><br></br>\n" +
                    "                                     \n"},
                {"content" : "  <u>   <h7>Welcome to <span >Ruby</span> Template</h7></u><br></br>\n" +
                    "                                        <p1>Mauris ultricies neque nec augue. Aenean vehicula. Ut dictum. Vivamus placerat diam nec velit. Suspendisse ornare. Ut viverra. Mauris sagittis nisl sed ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. </p1>\n" +
                    "                                        <p1>Mauris ultricies neque nec augue. Aenean vehicula. Ut dictum. Vivamus placerat diam nec velit. Suspendisse ornare. Ut viverra. Mauris sagittis nisl sed ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Suspendisse est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus placerat metus eu urna. Etiam dictum. Aliquam eu dui eu ante euismod tristique. Donec posuere augue varius mi. Nunc erat ligula, ultrices eu, ultrices sed, sodales ut, magna. Mauris ultricies neque nec augue. </p1>\n" +
                    "                                        <blockquote>This template has been tested in Mozilla Firefox and IE7. The page validates as XHTML 1.0 Transitional using valid CSS. It will work in browser widths of 800x600, 1024x768 &amp; 1280x1064. The images used in this template are courtesy of <a href=\"http://www.sxc.hu/\" title=\"free images\">stock xchng</a>. The top navigation menu is from <a href=\"http://www.13styles.com/\" title=\"free CSS menus\">13 Styles</a> and has been amended to suit this template. For more FREE CSS templates visit <a href=\"http://www.mitchinson.net\">my website</a>.</blockquote>\n" +
                    "                                        <p1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse in odio et nibh volutpat eleifend. Donec rutrum, risus sed auctor malesuada, augue felis placerat neque, vel vestibulum odio erat eget felis. Phasellus id mauris eu urna sagittis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris elementum elit et ipsum. Cras ornare magna eu felis. Morbi convallis. Nunc fermentum, odio sed ornare ultricies, urna odio egestas sem, vel scelerisque nisi neque vitae lectus. Proin dolor. Vestibulum condimentum urna dignissim arcu. Nullam interdum. Proin lacinia, magna ut scelerisque facilisis, augue sem tempor purus, consequat suscipit tellus ligula et justo. Nam magna. Donec magna sapien, aliquam non, egestas eu, hendrerit nec, quam. Donec commodo auctor lectus. Suspendisse rhoncus. Proin tincidunt euismod nisi. Cras nibh ante, ultrices non, placerat quis, placerat id, est. Suspendisse sed quam volutpat lacus faucibus venenatis.</p1><br></br>\n"}
            ];

        for (var i = 0; i < pageDatagetfromDb.length; i++) {
            pageData.push(pageDatagetfromDb[i].content);
        }

        return (

            <tutorialspage>

                <Header/>


                <section style={{backgroundColor: "#f8f9fa"}} class="wrapper2">



                        <table class="table">
                            <div id="container">
                                <div id="content">

                                <tr>
                                    <div className="content" dangerouslySetInnerHTML={{__html: pageData}}></div>
                                </tr>

                                </div>
                            </div>


                            </table>
                </section>
                <Footer/>
            </tutorialspage>
        )
    }
}

export default TutorialsPage;

import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>


                <div class="wrapper row4 bgded overlay" >
                    <footer id="footer" class="hoc clear">

                        <div class="one_third first">
                            <h3 class="heading">TJS Online</h3>
                            <ul class="faico clear">
                                <li><a class="faicon-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="faicon-dribble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="faicon-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="faicon-vk" href="#"><i class="fa fa-vk"></i></a></li>
                            </ul>
                        </div>
                        <div class="one_third">
                            <ul class="nospace meta">
                                <li class="btmspace-15"><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
                                <li><i class="fa fa-envelope-o"></i> info@domain.com</li>
                            </ul>
                        </div>
                        <div class="one_third">
                            <form method="post" action="#">
                                <fieldset>
                                    <legend>Newsletter:</legend>
                                    <div class="clear">
                                        <input type="text" value="" placeholder="Type Email Here&hellip;"/>
                                            <button class="fa fa-share" type="submit" title="Submit"><em>Submit</em></button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                    </footer>
                </div>





                <div class="wrapper row5">
                    <div id="copyright" class="hoc clear">

                        <p class="fl_left">Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
                        <p class="fl_right">Template by TJS Online Templates</p>

                    </div>
                </div>
                <a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a>


            </footer>
        );
    }
}

export default Footer;

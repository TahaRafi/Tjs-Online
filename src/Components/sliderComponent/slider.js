import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <slider>
                <div id="pageintro" class="hoc clear">
                    <div class="flexslider basicslider">
                        <ul class="slides">
                            <li>
                                <article>
                                    <p>Ullamcorper</p>
                                    <h3 class="heading">Maecenas nulla tellus</h3>
                                    <p>Vitae lobortis id ut mi in molestie in</p>
                                    <footer><a class="btn" href="#">Venenatis curabitur</a></footer>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <p>Scelerisque</p>
                                    <h3 class="heading">Dolor rhoncus nullam</h3>
                                    <p>Augue non id quam sit amet urna lobortis</p>
                                    <footer><a class="btn inverse" href="#">Interdum lectus</a></footer>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <p>Vestibulum</p>
                                    <h3 class="heading">Justo erat venenatis</h3>
                                    <p>Tempor sit amet ac nibh nullam mattis</p>
                                    <footer><a class="btn" href="#">Bibendum magna</a></footer>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </slider>
        );
    }
}

export default Slider;

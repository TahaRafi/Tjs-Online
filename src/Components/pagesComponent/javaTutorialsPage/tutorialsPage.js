import React, { Component, Text, View, Button} from 'react';
import Header from "../../headerComponent/header";
import  Footer from '../../footerComponent/footer';


var pageDatagetfromDb=[];
class TutorialsPage extends Component {




    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        var pageData = [];
        pageDatagetfromDb = [
            {"name": "Intro", "heading": "This is Java course", "content": "       <h2>Auto Sidebar</h2><br />\n" +
                "\n" +
                "                   <p>This sidebar is as tall as its content (the links), and is always shown.</p>\n" +
                "                   <p>Scroll down the page to see the result.</p>\n" +
                "                   <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n" +
                "                   <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n" +
                "                   <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n" +
                "                   <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>"},
            {"name": "JAVA 9", "heading": "This is Java course", "content": "taha"},
            {"name": "JAVA 8", "heading": "This is Java course", "content": "hatim"}
        ];
        for (var i = 0; i < pageDatagetfromDb.length; i++) {
            pageData.push( pageDatagetfromDb[i].name);
        }
        this.state = {
            justClicked: null,
            letters:   pageData
        };
    }



    handleClick(index) {
        this.setState({ justClicked: pageDatagetfromDb[index].content});
    }




    render() {

        var names = ['Jake', 'Jon', 'Thruster'];

        return (

            <tutorialspage>

                <Header/>

                <div class="sidenav2">
                    <ul>
                        {this.state.letters.map((letter,index) =>
                            <li key={letter} onClick={() => this.handleClick(index)}>
                                <a>{letter}</a>
                            </li>
                        )}

                    </ul>
                </div>

                <div class="main2">
                    {this.state.justClicked}
                </div>

                <Footer/>

            </tutorialspage>
        )
    }
}

export default TutorialsPage;
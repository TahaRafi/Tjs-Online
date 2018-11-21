import React, { Component } from 'react';
import Script from 'react-load-script';

class AboutScript extends Component {




    render() {



        return (
            <aboutscript>

                <Script
                    url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
                    onCreate={this.handleScriptCreate.bind(this)}
                    onError={this.handleScriptError.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                />

            </aboutscript>
        );
    }
}

export default AboutScript;

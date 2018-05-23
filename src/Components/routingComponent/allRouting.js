import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class AllRouting extends Component {

    render() {


        var routers = JSON.parse(sessionStorage.getItem('LinkData'));
        var setRoutingLinkOfPages=[];

        for (var i = 0; i < routers.length; i++) {
            setRoutingLinkOfPages.push(
                <Route path={routers[i].link} component={routers[i].compName} />
            )
        }

        return (
            <allRouting>
                {setRoutingLinkOfPages}
            </allRouting>
        );
    }
}

export default AllRouting;

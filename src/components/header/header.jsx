import React, { Component } from 'react';
import * as mat from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import LeftDrawer from '../drawer/drawer';

import {
    hashHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { openDrawer: false }
    }

    changeRoute() {
        this.setState({ openDrawer: false })
        hashHistory.push('/' + this.props.label);
    }
    openLeftDrawer() {
        this.setState({ openDrawer: !this.state.openDrawer })

    }
    render() {
        let drawer;
        if (this.state.openDrawer === true) {
            console.log(this.state.openDrawer)
            drawer = <LeftDrawer open={this.state.openDrawer} close={this.openLeftDrawer.bind(this)} />
        } else drawer = ""
        return (
            <div>
                <mat.AppBar
                    title="Crime Report App"
                    iconElementRight={<mat.FlatButton label={this.props.label} />}
                    iconElementLeft={<mat.IconButton><NavigationMenu /></mat.IconButton>}
                    onLeftIconButtonTouchTap={this.openLeftDrawer.bind(this)}
                    onRightIconButtonTouchTap={this.changeRoute.bind(this)}
                />
                {drawer}
            </div>
        )
    }
}
// <mat.FlatButton label={this.props.label} />
export default Header
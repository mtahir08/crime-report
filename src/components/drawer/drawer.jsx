import React, { Component } from 'react';
import * as mat from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


class LeftDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    componentDidMount() {
        this.setState({
            open: this.props.open

        })
    }

    handleToggle() {
        this.setState({ open: false });
    }

    componentWillUnmount() {
        this.props.close(this.state.open)
    }

    render() {
        return (
            <div>
                <mat.Drawer open={this.state.open}>
                    <mat.AppBar title="Menu"
                        iconElementLeft={<mat.IconButton></mat.IconButton>}
                        iconElementRight={<mat.IconButton><NavigationArrowBack /></mat.IconButton>}
                        onRightIconButtonTouchTap={this.handleToggle.bind(this)}
                    />
                    <mat.MenuItem onTouchTap={this.handleToggle.bind(this)}>Menu Item</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.handleToggle.bind(this)}>Menu Item 2</mat.MenuItem>
                </mat.Drawer>
            </div>
        );
    }
}

export default LeftDrawer
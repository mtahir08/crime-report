import React, { Component } from 'react';
import * as mat from 'material-ui';
import Header from '../header/header';
import RightDrawer from '../reportFile/reportFile';
import './dashboard.css'

import {
    hashHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openReport: false
        }
    }

    componentDidMount(){
        this.props.loadUserRequest();
           console.log( this.props.application)
    }
    viewAllReports() {
        hashHistory.push("/report");
    }

    reportFileOpen() {
        this.setState({
            openReport: !this.state.openReport
        })
    }

    reportFileClose() {
        this.setState({
            openReport: !this.state.openReport
        })
    }

    render() {
        const style = {
            height: 200,
            width: 200,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        let drawer;
        if (this.state.openReport === true) {
            console.log(this.state.openReport)
            drawer = <RightDrawer open={this.state.openReport} application={this.props.application} close={this.reportFileClose.bind(this)} />
        } else drawer = ""

        return (
            <div>
                <Header label="Logout" />
                <div className="main-dashboard-div">
                    <mat.Card style={style}>
                        <mat.CardHeader
                            title="Complaints"
                            avatar="../../public/images/avatar.png"
                        />
                        <mat.CardText>

                        </mat.CardText>
                        <mat.CardActions>
                            <mat.FlatButton label="View" primary={true} onClick={this.viewAllReports.bind(this)} />
                        </mat.CardActions>
                    </mat.Card>
                    <mat.Card style={style}>
                        <mat.CardHeader
                            title=" Crimes"
                            avatar="../../public/images/avatar.png"
                        /><mat.CardText>
                        </mat.CardText>
                        <mat.CardActions>
                            <mat.FlatButton label="View" />
                        </mat.CardActions>

                    </mat.Card>
                    <mat.Card style={style}>
                        <mat.CardHeader
                            title=" Missing Persons"
                            avatar="../../public/images/avatar.png"
                        />
                        <mat.CardText>
                        </mat.CardText>
                        <mat.CardActions>
                            <mat.FlatButton label="View" />
                        </mat.CardActions>

                    </mat.Card>
                    <mat.Card style={style}>
                        <mat.CardHeader
                            title="View Reports"
                            avatar="../../public/images/avatar.png"
                        />
                        <mat.CardText>

                        </mat.CardText>
                        <mat.CardActions>
                            <mat.FlatButton label="View" onClick={this.viewAllReports.bind(this)} />
                        </mat.CardActions>

                    </mat.Card>
                    <mat.Card style={style}>
                        <mat.CardHeader
                            title="Report a File"
                            avatar="../../public/images/avatar.png"
                        />
                        <mat.CardText>

                        </mat.CardText>
                        <mat.CardActions>
                            <mat.FlatButton label="Report" onClick={this.reportFileOpen.bind(this)} />
                        </mat.CardActions>

                    </mat.Card>
                </div>
                {drawer}
            </div>
        );
    }
}

export default Dashboard
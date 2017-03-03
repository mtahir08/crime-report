import React, { Component } from 'react';
import * as mat from 'material-ui';
import Header from '../header/header'
class Report extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            height: 200,
            width: 200,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        return (
            <div>
                <Header label="Logout"/>
                <div className="main-dashboard-div">
                    <mat.Card>
                        <mat.CardHeader
                            title="hello"
                        />
                        <mat.CardText >
                            <div> Description : </div>
                            <div> Details :</div>
                        </mat.CardText>
                        <span></span>
                    </mat.Card>
                </div>
            </div>
        );
    }
}

export default Report
import React, { Component } from 'react';
import * as mat from 'material-ui';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

class RightDrawerReportFile extends Component {

    constructor(props) {
        super(props);
        this.citiesGroup = [
            "Huntsville",
            "Anchorage",
            "Phoenix",
            "Little-Rock",
            "Sacramento",
            "Los-Angeles",
            "Beverly-Hills",
            "Denver",
            "Hartford",
            "Washington"
        ];
        this.state = { open: false, name: '', gender: 1, inicidentType: 1, address: '', cityname: "Washington", incidentDate: new Date(), incidentTime: new Date() };
        this.handleSubmit = this.handleReportSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleDateChang(event, date) {
        this.setState({
            incidentDate: date,
        });
        console.log(date);
    };

    handleChangeTimePicker12(event, date) {
        this.setState({ incidentTime: date });
    };

    handleReportSubmit(evt) {
        evt.preventDefault();
        var affectedName = this.refs.affectedName.getValue();
        var inicidentType = this.state.inicidentType;
        var address = this.refs.address.getValue();
        var cityname = this.state.cityname;
        var incidentDate = this.state.incidentDate.getTime();
        var incidentTime = this.state.incidentTime.getTime();
        var gender = this.state.gender ? "Male" : "Female";
        var objectToSave = {
            uid: this.props.application.user.uid,
            address: address,
            affectedName: affectedName,
            inicidentType: inicidentType,
            cityname: cityname,
            gender: gender,
            incidentDate: incidentDate,
            incidentTime: incidentTime
        }
        this.props.addNewReports(objectToSave);
    }
    render() {
        const style = {
            padding: '0 20px 0 20px'
        };
        const { application } = this.props.application;
        return (

            <div>
                <mat.Drawer open={this.state.open} width={500} openSecondary={true} docked={true}>
                    <mat.AppBar title="File A Report"
                        iconElementLeft={<mat.IconButton><NavigationArrowForward /></mat.IconButton>}
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    />

                    <form onSubmit={this.handleSubmit} onChange={this.clearErrors} style={style}>
                        <h3>Personal Info</h3>
                        <mat.Divider />
                        <mat.TextField
                            hintText="John Doe"
                            floatingLabelText="Affected Person Name"
                            className="full-width-container"
                            ref="affectedName"
                            name="name"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange}
                        /><br />
                        <mat.SelectField
                            ref="gender"
                            name="gender"
                            floatingLabelText="Affected Gender"
                            onChange={this.handleGenderTypeChange}
                            className="full-width-container"
                            value={this.state.gender}
                            required={true}
                        >
                            <mat.MenuItem value={1} primaryText="Male" />
                            <mat.MenuItem value={2} primaryText="Female" />
                        </mat.SelectField>
                        <mat.DatePicker
                            ref="inicidentDate"
                            hintText="Inicident Date"
                            floatingLabelText="Inicident Date"
                            value={this.state.incidentDate}
                            onChange={this.handleDateChange}
                        />
                        <mat.TimePicker
                            ref="inicidentTime"
                            format="ampm"
                            hintText="Inicident Time"
                            floatingLabelText="Inicident Time"
                            value={this.state.incidentTime}
                            onChange={this.handleChangeTimePicker12}
                        />
                        <mat.SelectField
                            ref="cityname"
                            name="cityname"
                            floatingLabelText="City Name"
                            onChange={this.handlecitynameChange}
                            value={this.state.cityname}
                            className="full-width-container"
                            required={true}>
                            {
                                this.citiesGroup.map(citiesgroup => {
                                    return <mat.MenuItem key={citiesgroup} value={citiesgroup} primaryText={citiesgroup} />
                                })
                            }
                        </mat.SelectField>
                        <mat.SelectField
                            ref="inicidentType"
                            name="inicidentType"
                            floatingLabelText="Inicident Type"
                            onChange={this.handleInicidentTypeTypeChange}
                            className="full-width-container"
                            value={this.state.inicidentType}
                            required={true}>
                            <mat.MenuItem value={1} primaryText="Crime" />
                            <mat.MenuItem value={2} primaryText="Missing" />
                            <mat.MenuItem value={3} primaryText="Complain" />
                            <mat.MenuItem value={4} primaryText="Other" />
                        </mat.SelectField>
                        <mat.TextField
                            hintText="Incident Details"
                            floatingLabelText="Incident Details"
                            multiLine={true}
                            className="full-width-container"
                            rows={3}
                            rowsMax={3}
                            ref="address"
                            name="address"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange}
                        /><br />
                        <div >
                            <mat.RaisedButton type="submit" label="Submit" primary={true} />
                            <mat.RaisedButton label="Cancel" secondary={true} onTouchTap={this.handleToggle.bind(this)} />
                        </div>
                    </form>
                </mat.Drawer>
            </div>
        );
    }
}

export default RightDrawerReportFile
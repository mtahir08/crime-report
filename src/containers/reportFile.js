import { connect } from 'react-redux';
import RightDrawerReportFile from '../components/reportFile/reportFile';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadUserRequest } from '../store/actions/loadUserRequest';
import { addReportRequest } from '../store/actions/report';

function mapStateToProps(state) {
    //here we are mapping the redux state to props so we can use it in our components
    return {
        application: state.application
    };
}

function mapDispatchToProps(dispatch) {
    //Those will be the actions we will be Triggerening from Components
    return {
        addNewReports    : (reportData) => dispatch(addReportRequest(reportData))
    };
}

const ReportFileContainer = connect(mapStateToProps, mapDispatchToProps)(RightDrawerReportFile);

export default ReportFileContainer;
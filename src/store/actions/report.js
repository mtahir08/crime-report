// addReportRequest
import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';
import * as firebase from 'firebase';

export function addReportRequest(reportData) {
    return dispatch => {
        dispatch(AddReportRequest());
        const userRef = firebase.database().ref('/reports/' + reportData.uid);
        userRef.push(reportData, reportSuccessData => {
            dispatch(AddReportRequestSuccess({ uid: reportData.uid }));
        });

    }
    function AddReportRequest() {
        return {
            type: ActionTypes.AddReportRequest
        };
    }

    function AddReportRequestSuccess(data) {
        return {
            type: ActionTypes.AddReportRequestSuccess,
            data
        };
    }

    function AddReportRequestFailed() {
        return {
            type: ActionTypes.AddReportRequestFailed
        };
    }
}
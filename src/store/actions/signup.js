import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';
import * as firebase from 'firebase';
export function SignUpRequest(SignUpData) {
    return dispatch => {
        dispatch(signUpRequest());
        firebase.auth().createUserWithEmailAndPassword(
            SignUpData.email, SignUpData.password
        )
            .then((data) => {
                const userRef = firebase.database().ref('/users/' + data.uid);
                userRef.set({
                    email: data.email
                }, signUpSuccessData => {
                    dispatch(SignUpRequestSuccess({ uid: data.uid, userEmail: data.email }));
                });
            })
            .catch((error) => {
                dispatch(SignUpRequestFailed(error));
            });
    }
}

function signUpRequest() {
    return {
        type: ActionTypes.SignUpRequest
    };
}

function SignUpRequestSuccess(data) {
    return {
        type: ActionTypes.SignUpRequestSuccess,
        data
    };
}

function SignUpRequestFailed(error) {
    console.log(error)
    return {
        type: ActionTypes.SignUpRequestFailed
    };
}
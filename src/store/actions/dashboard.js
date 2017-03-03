import ActionTypes from './actionTypes';
import * as firebase from 'firebase';
export function dashboard(loginData) {
    return dispatch => {
        dispatch(LoginRequest());
        firebase.auth().signInWithEmailAndPassword(
            loginData.email, loginData.password
        )
           .then((data) => {
                dispatch(LoginRequestSuccess({ uid: data.uid, userEmail: data.email }));
            })
            .catch((error) => {
                console.log(error);
                dispatch(LoginRequestFailed(error));
            });
    }
}

function LoginRequest() {
    return {
        type: ActionTypes.LoginRequest
    };
}

function LoginRequestSuccess(data) {
    return {
        type: ActionTypes.LoginRequestSuccess,
        data
    };
}

function LoginRequestFailed() {
    return {
        type: ActionTypes.LoginRequestFailed
    };
}
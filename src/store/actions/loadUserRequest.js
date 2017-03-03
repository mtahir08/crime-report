import ActionTypes from './actionTypes';

export function loadUserRequest() {
  return dispatch => {
    dispatch(LoadUserRequest())
  }
}

function LoadUserRequest() {
  return {
    type: ActionTypes.LoadUserRequest
  };
}
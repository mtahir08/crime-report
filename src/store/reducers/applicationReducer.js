import ActionTypes from '../actions/actionTypes';

const initial_state = { };
export function applicationReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LoadInitialState: {
      return state;
    }
    case ActionTypes.LoginRequestSuccess: {
      var newState = Object.assign({}, state, { user: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.SignUpRequestSuccess: {
      var newState = Object.assign({}, state, { user: action.data });
      state = newState;
      return state;
    }
    default:
      return state;
  }
}
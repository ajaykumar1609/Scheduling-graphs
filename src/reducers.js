import { combineReducers } from 'redux';
import { LOAD_SCHEDULE_DATA } from './actions';

const initialState = {
  scheduleData: {}
};

function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SCHEDULE_DATA:
      return {
        ...state,
        scheduleData: action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  schedule: scheduleReducer
});

export default rootReducer;

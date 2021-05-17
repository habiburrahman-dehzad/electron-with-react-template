import { combineReducers } from 'redux';
import testRecuder from './testReducer';
import commentsReducer from './commentsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  test: testRecuder,
  comments: commentsReducer,
  auth: authReducer,
});

export default rootReducer;

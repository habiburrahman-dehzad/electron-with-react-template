import { DECREMENT_TEST_NUM, INCREMENT_TEST_NUM } from '../actions/types';

const initialState = {
  testNum: 20,
};

const testReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_TEST_NUM:
      return {
        ...state,
        testNum: state.testNum + payload,
      };
    case DECREMENT_TEST_NUM:
      return {
        ...state,
        testNum: state.testNum - payload,
      };
    default:
      return state;
  }
};

export default testReducer;

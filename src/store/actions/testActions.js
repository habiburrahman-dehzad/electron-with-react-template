import { DECREMENT_TEST_NUM, INCREMENT_TEST_NUM } from './types';

export const incrementTestNum = (increment) => {
  return {
    type: INCREMENT_TEST_NUM,
    payload: increment,
  };
};

export const decrementTestNum = (decrement) => {
  return {
    type: DECREMENT_TEST_NUM,
    payload: decrement,
  };
};

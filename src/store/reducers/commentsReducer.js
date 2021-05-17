import { FETCH_COMMENTS, SAVE_COMMENT } from '../actions/types';

const initialState = [];

const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];

    case FETCH_COMMENTS:
      return [
        ...state,
        ...payload.data.slice(0, 50).map((comment) => comment.name),
      ];
    default:
      return state;
  }
};

export default commentsReducer;

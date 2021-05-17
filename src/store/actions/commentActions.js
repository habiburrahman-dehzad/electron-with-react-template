import { FETCH_COMMENTS, SAVE_COMMENT } from './types';
import axios from 'axios';

export const FETCH_COMMENTS_URL =
  'http://jsonplaceholder.typicode.com/comments';

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => {
  const res = axios.get(FETCH_COMMENTS_URL);

  return {
    type: FETCH_COMMENTS,
    payload: res,
  };
};

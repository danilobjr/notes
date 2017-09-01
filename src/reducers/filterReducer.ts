import { FILTER } from './../actionTypes';

export default (state = '', action) => {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default:
      return state;
  }
};

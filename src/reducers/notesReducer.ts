import { ADD_NOTE, LOAD_NOTES } from './../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, { id: action.id, title: action.title, text: action.text }];
    case LOAD_NOTES:
      return action.notes;
    default:
      return state;
  }
};

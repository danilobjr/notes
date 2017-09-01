const ADD_NOTE = 'ADD_NOTE';
const LOAD_NOTES = 'LOAD_NOTES';

export const addNote = (id, title, text) => {
  return { type: ADD_NOTE, id, title, text };
};

export const loadNotes = (notes) => {
  return { type: LOAD_NOTES, notes };
};

export const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, { id: action.id, title: action.title, text: action.text }];
    case LOAD_NOTES:
      return action.notes;
    default:
      return state;
  }
};

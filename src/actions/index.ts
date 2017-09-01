import * as actionTypes from 'actionTypes';

export const setFilter = (filter: string) => {
  return { type: actionTypes.FILTER, filter };
};

export const openAddModal = () => {
  return { type: actionTypes.OPEN_MODAL };
};

export const closeAddModal = () => {
  return { type: actionTypes.CLOSE_MODAL };
};

export const addNote = (id, title, text) => {
  return { type: actionTypes.ADD_NOTE, id, title, text };
};

export const loadNotes = (notes) => {
  return { type: actionTypes.LOAD_NOTES, notes };
};

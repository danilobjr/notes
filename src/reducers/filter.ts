const FILTER   = 'FILTER';
const OPEN_MODAL   = 'OPEN_MODAL';
const CLOSE_MODAL   = 'CLOSE_MODAL';
const ADD_CARD   = 'ADD_CARD';

export function setFilter(filter: string) {
  return { type: FILTER, filter };
}

export function openAddModal() {
  return { type: OPEN_MODAL };
}
export function closeAddModal() {
  return { type: CLOSE_MODAL };
}

export const addCard = (id, title, text) => {
  return { type: ADD_CARD, id, title, text };
}

export const filter = (state = '', action) => {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const modal = (state = false, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, {id: action.id, title: action.title, text: action.text}];
    default:
      return state;
  }
};

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const openAddModal = () => {
  return { type: OPEN_MODAL };
};

export const closeAddModal = () => {
  return { type: CLOSE_MODAL };
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

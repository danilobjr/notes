const FILTER = 'FILTER';

export const setFilter = (filter: string) => {
  return { type: FILTER, filter };
};

export const filter = (state = '', action) => {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default:
      return state;
  }
};

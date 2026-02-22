export const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add':
      return [...state, Math.random() * 1000];
    default:
      return state;
  }
};
export default reducer;

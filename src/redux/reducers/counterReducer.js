const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DEC':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };
    case 'INCBYNUM':
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;

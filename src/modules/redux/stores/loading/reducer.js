import type from './type';

const initialState = {
  show: false
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_LOADING:
      return {
        ...state,
        show: action.value
      };
    default:
      return state;
  }
};

export default loading;

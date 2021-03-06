import * as actionType from "../actions/actions";

const initialState = {
  counter: 0,
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case actionType.SUBRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };

    default:
      return state;
  }
};

export default reduce;

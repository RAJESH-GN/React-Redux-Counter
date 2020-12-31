import * as actionType from "../actions/actions";

const initialState = {
  results: [],
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.counter,
        }),
      };
    case actionType.DELETE_ITEM:
      return {
        ...state,
        results: state.results.filter((res) => res.id != action.id),
      };

    default:
      return state;
  }
};

export default reduce;

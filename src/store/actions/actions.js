export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBRACT = "SUBRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_ITEM = "DELETE_ITEM";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (val) => {
  return {
    type: ADD,
    value: val,
  };
};

export const subract = (val) => {
  return {
    type: SUBRACT,
    value: val,
  };
};

export const saveResult = (ctr) => {
  return {
    type: STORE_RESULT,
    counter: ctr,
  };
};

export const storeResult = (ctr) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(ctr));
    }, 5000);
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

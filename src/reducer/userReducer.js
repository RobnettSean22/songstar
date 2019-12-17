const initalState = {
  user: null
};

export const SET_USER = "SET_USER";

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

const guest = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
};

export default guest;

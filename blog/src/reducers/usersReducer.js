/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
    if (action.type === "FETCH_USER") {
      return [...state, action.payload]
    }
  
    return state;
  };
  
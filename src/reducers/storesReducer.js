import types from "./../types/types";
const initialState = {
  garageSaleStores: [],
  activeStore: null,
};

export const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveStore:
      return {
        ...state,
        activeStore: {
          ...action.payload,
        },
      };
    case types.loadStores:
      return {
        ...state,
        garageSaleStores: [...action.payload],
      };
    case types.storesLogoutCleaning:
      return { ...state, activeStore: null, garageSaleStores: [] };
    default:
      return state;
  }
};

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
        garageSaleStores: action.payload,
      };
    case types.storesLogoutCleaning:
      return { ...state, activeStore: null, garageSaleStores: [] };
    case types.setStoreAsFavorite:
      return { ...state, garageSaleStores: action.payload };
    case types.deleteStoreFromFavorites:
      return { ...state, garageSaleStores: action.payload };
    default:
      return state;
  }
};

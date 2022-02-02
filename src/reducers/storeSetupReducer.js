import types from "./../types/types";

const initialState = {};

const storeSetupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addFirstFormInfoToCreateStore:
      return {
        ...state,
        firstFormInfo: action.payload,
      };
    case types.addSecondFormInfoToCreateStore:
      return {
        ...state,
        secondFormInfo: action.payload,
      };
    case types.addThirdFormInfoToCreateStore:
      return {
        ...state,
        thirdfirstFormInfo: action.payload,
      };

    case types.resetFirstFormInfoToCreateStore:
      return {
        ...state,
        firstFormInfo: {},
      };
    case types.resetSecondFormInfoToCreateStore:
      return {
        ...state,
        secondFormInfo: {},
      };
    case types.resetThirdFormInfoToCreateStore:
      return {
        ...state,
        thirdfirstFormInfo: {},
      };
    default:
      return state;
  }
};

export default storeSetupReducer;

import types from "./../types/types";

const initialState = {
  firstFormInfo: {},
  secondFormInfo: {},
  thirdFormInfo: {},
  formCheckSection01IsValidated: true,
  formCheckSection02IsValidated: true,
  formCheckSection03IsValidated: false,
  creationConfirmationIsConfirmed: false,
};

const storeSetupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addFirstFormInfoToCreateStore:
      return {
        ...state,
        firstFormInfo: action.payload,
        formCheckSection01IsValidated: true,
      };
    case types.addSecondFormInfoToCreateStore:
      return {
        ...state,
        secondFormInfo: action.payload,
        formCheckSection02IsValidated: true,
      };
    case types.addThirdFormInfoToCreateStore:
      return {
        ...state,
        thirdFormInfo: action.payload,
        formCheckSection03IsValidated: true,
      };

    case types.confirmStoreCreation:
      return {
        ...state,
        creationConfirmationIsConfirmed: true,
      };

    case types.unConfirmStoreCreation:
      return {
        ...state,
        creationConfirmationIsConfirmed: false,
      };

    case types.resetFirstFormInfoToCreateStore:
      return {
        ...state,
        firstFormInfo: {},
        formCheckSection01IsValidated: false,
      };
    case types.resetSecondFormInfoToCreateStore:
      return {
        ...state,
        secondFormInfo: {},
        formCheckSection02IsValidated: false,
      };
    case types.resetThirdFormInfoToCreateStore:
      return {
        ...state,
        thirdFormInfo: {},
        formCheckSection03IsValidated: false,
      };
    default:
      return state;
  }
};

export default storeSetupReducer;

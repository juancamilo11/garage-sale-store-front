import types from "../types/types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        photoUrl: action.payload.photoUrl,
        occupation: action.payload.occupation,
        cellphone: action.payload.cellphone,
        email: action.payload.email,
        postalCode: action.payload.postalCode,
        colombianState: action.payload.colombianState,
        phone: action.payload.phone,
        address: action.payload.address,
        dateOfBirth: action.payload.dateOfBirth,
        registerDate: action.payload.registerDate,
      };
    case types.authLogout:
      return {};
    default:
      return state;
  }
};

export default authReducer;

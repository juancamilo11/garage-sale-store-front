import types from "../types/types";

/*
if(logged) -> 
{
  uid: 3DN43784387MCM7,
  name: Juan Camilo Cardona Calderón,
  email: juancamilo19997814@gmail.com,
  photoUrl: https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100,
  creationTime: 1640499732459
  lastSignInTime: 1652034802309

if(!logged) -> {} 

*/

const authReducer = (state = {}, action) => {
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

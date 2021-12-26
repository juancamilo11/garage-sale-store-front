import types from "../types/types";

/*
if(logged) -> 
{
  uid: 3DN43784387MCM7,
  name: Juan Camilo Cardona Calderón,
  photoUrl: https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100,
  creationTime: 1640499732459
}

if(!logged) -> {} 

*/

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
        photoUrl: action.payload.photoUrl,
        creationTime: action.payload.creationTime,
        lastSignInTime: action.payload.lastSignInTime,
      };
    case types.authLogout:
      return {};
    default:
      return state;
  }
};

export default authReducer;

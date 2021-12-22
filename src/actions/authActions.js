import types from "../types/types";

export const login = (uid, displayName, photoUrl) => ({
  action: types.authLogin,
  payload: { uid, displayName, photoUrl },
});

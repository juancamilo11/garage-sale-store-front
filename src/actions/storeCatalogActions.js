import types from "../types/types";
import { baseUrl } from "./usersActions";

export const activeStore = (id, store) => ({
  type: types.setActiveStore,
  payload: { id, ...store },
});

export const setStoreOrProductAsFavorite = () => ({
  types: types.setStoreOrProductAsFavorite,
});

const executeActionToState = (dispatch) => {};

export const setStoreOrProductAsFavorite = (
  userId,
  currentDate,
  elementId,
  type, //STORE or PRODUCT
  action //Add or Delete
) => {
  return async (dispatch, state) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`${baseUrl}/update/set-element-favorite`, {
        method: "POST",
        body: {
          userId,
          currentDate,
          elementId,
          type,
          action,
        },
      });
      const result = await response.json();
      if (response.ok) {
        executeActionToState(state, dispatch, result);
      } else {
        throw await response.json();
      }
    } catch (err) {
      throw err;
    }
  };
};

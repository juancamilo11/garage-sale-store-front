import types from "../types/types";

export const activeStore = (id, store) => ({
  type: types.setActiveStore,
  payload: { id, ...store },
});

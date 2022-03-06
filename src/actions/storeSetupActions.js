import types from "../types/types";

export const addFirstFormInfoToCreateStore = (firstFormValues) => ({
  type: types.addFirstFormInfoToCreateStore,
  payload: firstFormValues,
});

export const addSecondFormInfoToCreateStore = (secondFormValues) => ({
  type: types.addSecondFormInfoToCreateStore,
  payload: secondFormValues,
});

export const addThirdFormInfoToCreateStore = (thirdFormValues) => ({
  type: types.addThirdFormInfoToCreateStore,
  payload: thirdFormValues.productList,
});

export const resetFirstFormInfoToCreateStore = () => ({
  type: types.resetFirstFormInfoToCreateStore,
});

export const resetSecondFormInfoToCreateStore = () => ({
  type: types.resetSecondFormInfoToCreateStore,
});

export const resetThirdFormInfoToCreateStore = () => ({
  type: types.resetThirdFormInfoToCreateStore,
});

export const confirmStoreCreation = () => ({
  type: types.confirmStoreCreation,
});

export const unConfirmStoreCreation = () => ({
  type: types.unConfirmStoreCreation,
});

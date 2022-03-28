import environment from "../environment/environment";
import types from "../types/types";
import { finishLoading, startLoading } from "./uiActions";

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
  payload: thirdFormValues,
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

export const setActiveStore = (store) => ({
  type: types.setActiveStore,
  payload: store,
});

export const startPostGarageSaleStore = async (objectStore) => {
  try {
    const response = await fetch(`${environment.msAdminStoresUrl}/post/store`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectStore),
    });
    console.log(JSON.stringify(objectStore));
    if (response.ok) {
      console.log("Biennnn");
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
  } finally {
  }
};

import types from "../types/types";
import { finishLoading, startLoading } from "./uiActions";
import environment from "./../environment/environment";

export const loadStores = (storeList) => ({
  type: types.loadStores,
  payload: storeList,
});

export const activeStore = (id, store) => ({
  type: types.setActiveStore,
  payload: { id, ...store },
});

export const setNoActiveStore = () => ({
  type: types.setNoActiveStore,
  payload: null,
});

export const startFetchAllActiveStores = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `${environment.msAdminStoresUrl}/get/stores`
      );
      if (response.ok) {
        const storeList = await response.json();
        console.log(storeList);
        dispatch(loadStores(storeList));
      } else {
        dispatch(finishLoading());
        throw await response.json();
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const startPostNewQuestionToProduct = async (
  storeId,
  productId,
  categoryName,
  newQuestion
) => {
  try {
    const response = await fetch(
      `${environment.msAdminStoresUrl}/post/question/${storeId}/${categoryName}/${productId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      }
    );
    if (response.ok) {
      return;
    }
  } catch (err) {}
};

export const startPostAnswerToProductQuestion = async (
  storeId,
  productId,
  categoryName,
  theAnswer
) => {
  try {
    const response = await fetch(
      `${environment.msAdminStoresUrl}/post/answer/${storeId}/${categoryName}/${productId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(theAnswer),
      }
    );
    if (response.ok) {
      return;
    }
  } catch (err) {}
};

export const startFetchAllActiveStoresBySellerId = async (sellerId) => {
  try {
    const response = await fetch(
      `${environment.msAdminStoresUrl}/get/stores/seller/${sellerId}`
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {}
};

export const startFetchStoreViews = async (storeId) => {
  try {
    const usersResponse = await fetch(
      `${environment.msAdminInfoUserUrl}/get/store/views/users/${storeId}`
    );
    if (usersResponse.ok) {
      return await usersResponse.json();
    }
  } catch (error) {}
};

export const startRegisterStoreVisualization = async (userId, storeId) => {
  try {
    const response = await fetch(
      `${environment.msAdminStoresUrl}/post/view/${storeId}/${userId}`,
      { method: "POST" }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {}
};

export const startCreatePurchaseOrder = async (
  storeId,
  productId,
  quantity,
  customerId,
  dateCreated
) => {
  try {
    window.alert(
      JSON.stringify({ storeId, productId, quantity, customerId, dateCreated })
    );
    const response = await fetch(
      `${environment.msAdminStoresUrl}/post/purchase-order`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeId,
          productId,
          quantity,
          customerId,
          dateCreated,
        }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {}
};

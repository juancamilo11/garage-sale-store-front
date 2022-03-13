import types from "../types/types";
import { finishLoading, startLoading } from "./uiActions";
import { baseUrl } from "./../environment/environment";

export const FAVORITE_TYPE_STORE = "Favorite Store Type";
export const FAVORITE_TYPE_PRODUCT = "Favorite Product Type";

export const ACTION_TYPE_ADD_NEW_FAVORITE = "Add new Favorite";
export const ACTION_TYPE_DELETE_FAVORITE = "Delete From Favorites";

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

//No implemented yet
export const setProductAsFavorite = (stores, result) => ({
  type: types.setProductAsFavorite,
  payload: null,
});

//No implemented yet
export const deleteProductFromFavorites = (stores, result) => ({
  type: types.deleteProductFromFavorites,
  payload: null,
});

export const setStoreAsFavorite = (stores, result) => ({
  type: types.setStoreAsFavorite,
  payload: stores.garageSaleStores.map((store) =>
    store.id === result.elementId ? { ...store, isAFavorite: true } : store
  ),
});

export const deleteStoreFromFavorites = (stores, result) => ({
  type: types.deleteStoreFromFavorites,
  payload: stores.garageSaleStores.map((store) =>
    store.id === result.elementId ? { ...store, isAFavorite: false } : store
  ),
});

const getActionToState = (stores, result) => {
  if (result.type === FAVORITE_TYPE_PRODUCT) {
    if (result.action === ACTION_TYPE_ADD_NEW_FAVORITE) {
      return setProductAsFavorite(stores, result);
    } else if (result.action === ACTION_TYPE_DELETE_FAVORITE) {
      return deleteProductFromFavorites(stores, result);
    }
  } else if (result.type === FAVORITE_TYPE_STORE) {
    if (result.action === ACTION_TYPE_ADD_NEW_FAVORITE) {
      return setStoreAsFavorite(stores, result);
    } else if (result.action === ACTION_TYPE_DELETE_FAVORITE) {
      return deleteStoreFromFavorites(stores, result);
    }
  }
};

export const startFetchAllActiveStores = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`${baseUrl}/api/v1/get/stores`);
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

export const setStoreOrProductAsFavorite = (
  userId,
  currentDate,
  elementId,
  type, //STORE or PRODUCT
  action //Add or Delete
) => {
  return async (dispatch, getState) => {
    const { stores } = getState();
    console.log(stores);
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
      if (!response.ok) {
        dispatch(
          getActionToState(stores, {
            userId,
            currentDate,
            elementId,
            type,
            action,
          })
        );
      } else {
        // throw await response.json();
        dispatch(
          getActionToState(stores, {
            userId,
            currentDate,
            elementId,
            type,
            action,
          })
        );
      }
    } catch (err) {
      throw err;
    }
  };
};

// export const setStoreOrProductAsFavorite = (
//   userId,
//   currentDate,
//   elementId,
//   type, //STORE or PRODUCT
//   action //Add or Delete
// ) => {
//   return async (dispatch, getState) => {
//     const { stores } = getState();
//     dispatch(startLoading());
//     try {
//       const response = await fetch(`${baseUrl}/update/set-element-favorite`, {
//         method: "POST",
//         body: {
//           userId,
//           currentDate,
//           elementId,
//           type,
//           action,
//         },
//       });
//       const result = await response.json();
//       if (response.ok) {
//         dispatch(getActionToState(stores, result));
//       } else {
//         throw await response.json();
//       }

//     } catch (err) {
//       throw err;
//     }
//   };
// };

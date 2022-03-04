const types = {
  authLogin: "[auth] login",
  authLogout: "[auth] logout",

  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",
  uiStartLoading: "[UI] Start Loading",
  uiFinishLoading: "[UI] Finish Loading",

  //Actions to store creation
  addFirstFormInfoToCreateStore: "[storeSetup] Add First Form Info",
  addSecondFormInfoToCreateStore: "[storeSetup] Add Second Form Info",
  addThirdFormInfoToCreateStore: "[storeSetup] Add Third Form Info",

  resetFirstFormInfoToCreateStore: "[storeSetup] Reset First Form Info",
  resetSecondFormInfoToCreateStore: "[storeSetup] Reset Second Form Info",
  resetThirdFormInfoToCreateStore: "[storeSetup] Reset Third Form Info",

  ConfirmStoreCreation: "[storeSetup] Confirm Store Creation",

  //Actions to catalog store
  setActiveStore: "[StoreCatalog] Set Active Store",
  loadStores: "[StoreCatalog] Load Stores",
  storesLogoutCleaning: "[StoreCatalog] Stores Logout Cleaning",

  setProductAsFavorite: "[StoreCatalog] Set Product As A Favorite",
  deleteProductFromFavorites: "[StoreCatalog] Delete Product From Favorites",
  setStoreAsFavorite: "[StoreCatalog] Set Store As A Favorite",
  deleteStoreFromFavorites: "[StoreCatalog] Delete Store From Favorites",
};

export default types;

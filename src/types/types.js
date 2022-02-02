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
};

export default types;

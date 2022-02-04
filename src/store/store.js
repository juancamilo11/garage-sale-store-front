import {
  aplyMiddleware,
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import storeSetupReducer from "../reducers/storeSetupReducer";
import { storesReducer } from "../reducers/storesReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  storeSetup: storeSetupReducer,
  stores: storesReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

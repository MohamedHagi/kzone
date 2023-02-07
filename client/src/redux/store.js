import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "../reducers/index.js";

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default { store, persistor };

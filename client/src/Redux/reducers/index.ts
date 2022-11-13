import { combineReducers } from "redux";
//aca nos vamos a traer todos los reducers
import buyersReducer from "./buyersReducer";
import productsReducer from "./productsReducer";
import storeReducer from "./storeReducers";
import adminReducer from "./adminReducers";

//ponemos el reducer dentro del objeto
export const reducers = combineReducers({
  buyers: buyersReducer,
  products: productsReducer,
  admin: adminReducer,
  store: storeReducer,
});

export type State = ReturnType<typeof reducers>;

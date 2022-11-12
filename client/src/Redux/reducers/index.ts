import { combineReducers } from "redux";
//aca nos vamos a traer todos los reducers
import buyersReducer from "./buyersReducer";
import productsReducer from "./productsReducer";

//ponemos el reducer dentro del objeto
export const reducers = combineReducers({
  buyers: buyersReducer,
  products: productsReducer,
});

export type State = ReturnType<typeof reducers>;

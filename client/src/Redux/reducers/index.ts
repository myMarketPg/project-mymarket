import { combineReducers } from "redux";
//aca nos vamos a traer todos los reducers
import dashboardSellerReducer from "./dashboardSellerReducer";

//ponemos el reducer dentro del objeto
export const reducers = combineReducers({
  dashboardSeller: dashboardSellerReducer,
});

export type State = ReturnType<typeof reducers>;

//////

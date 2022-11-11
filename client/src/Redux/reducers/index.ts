import { combineReducers } from "redux";
//aca nos vamos a traer todos los reducers
import buyersReducer from "./buyersReducer";

//ponemos el reducer dentro del objeto
export const reducers = combineReducers({
  buyers: buyersReducer,
});

export type State = ReturnType<typeof reducers>;

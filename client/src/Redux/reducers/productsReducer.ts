import { ActionType } from "../action/types";
import {
  Product,
  getAllProductsAction,
  getProductDetailAction,
} from "../Interfaces";

type Action = getAllProductsAction | getProductDetailAction;

export const productsReducer = (state: Product[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_PRODUCTS:
      return action.payload;
    case ActionType.GET_PRODUCT_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;

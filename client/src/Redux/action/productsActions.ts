import axios from "axios";
import { ActionType } from "./types";
import { Dispatch } from "redux";
import {
  Product,
  getAllProductsAction,
  getProductDetailAction,
} from "../Interfaces";

export const getAllProducts = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.get<Product[]>(
      "http://localhost:3001/api/products"
    );
    dispatch<getAllProductsAction>({
      type: ActionType.GET_ALL_PRODUCTS,
      payload: data.data,
    });
  };
};

export const getProductDetail = (id) => {
  return async function (dispatch: Dispatch) {
    const data = await axios.get<Product[]>(
      `http://localhost:3001/api/products/${id}`
    );
    dispatch<getProductDetailAction>({
      type: ActionType.GET_PRODUCT_DETAIL,
      payload: data.data,
    });
  };
};

import axios from "axios";
import { ActionType } from "./types";
import { Dispatch } from "redux";
import { Store, getStoreAction, updateStoreAction } from "../Interfaces";

export const getStore = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.get<Store[]>("http://localhost:3001/api/store");
    dispatch<getStoreAction>({
      type: ActionType.GET_STORE,
      payload: data.data,
    });
  };
};

export const updateStore = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.put<Store[]>("http://localhost:3001/api/store");
    dispatch<updateStoreAction[]>({
      type: ActionType.UPDATE_STORE,
      payload: data.data,
    });
  };
};

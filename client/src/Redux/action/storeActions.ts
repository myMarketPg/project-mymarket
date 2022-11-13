import axios from "axios";
import { ActionType } from "./types";
import { Dispatch } from "redux";
import { Store, getStoreAction } from "../Interfaces";

export const getStore = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.get<Store[]>("http://localhost:3001/api/store");
    dispatch<getStoreAction>({
      type: ActionType.GET_STORE,
      payload: data.data,
    });
  };
};

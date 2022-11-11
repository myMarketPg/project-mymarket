import axios from "axios";
import { ActionType } from "./types";
import { Dispatch } from "redux";
import { Buyer, getAllBuyersAction } from "../Interfaces";

export const getAllBuyers = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.get<Buyer[]>("http://localhost:3001/api/buyer");
    dispatch<getAllBuyersAction>({
      type: ActionType.GET_ALL_BUYERS,
      payload: data.data,
    });
  };
};

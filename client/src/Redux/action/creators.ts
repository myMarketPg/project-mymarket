import axios from "axios";
import { ActionType } from "./types";
import { Dispatch } from "redux";
import { Buyer, getAllBuyersAction } from "../Interfaces";

export const getAllBuyers = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.get<Buyer[]>("https://localhost:3001/api/buyers");
    dispatch<getAllBuyersAction>({
      type: ActionType.GET_ALL_BUYERS,
      payload: data.data,
    });
  };
};

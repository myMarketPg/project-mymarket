import { ActionType } from "../action/types";
import { Buyer, getAllBuyersAction } from "../Interfaces";

export const buyersReducer = (
  state: Buyer[] = [],
  action: getAllBuyersAction
) => {
  switch (action.type) {
    case ActionType.GET_ALL_BUYERS:
      return action.payload;
    default:
      return state;
  }
};

export default buyersReducer;

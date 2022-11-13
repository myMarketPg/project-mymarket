import { ActionType } from "../action/types";
import { Buyer, getAllBuyersAction } from "../Interfaces";

type Action = getAllBuyersAction;
export const buyersReducer = (state: Buyer[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_BUYERS:
      return action.payload;
    default:
      return state;
  }
};

export default buyersReducer;

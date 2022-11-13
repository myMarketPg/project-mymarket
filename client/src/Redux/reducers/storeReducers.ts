import { ActionType } from "../action/types";
import { Store, getStoreAction } from "../Interfaces";

type Action = getStoreAction;

export const buyersReducer = (state: Store[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_STORE:
      return action.payload;
    default:
      return state;
  }
};

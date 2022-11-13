import { ActionType } from "../action/types";
import { Store, getStoreAction, updateStoreAction } from "../Interfaces";

type Action = getStoreAction | updateStoreAction;

export const storeReducer = (state: Store[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_STORE:
      return action.payload;
    case ActionType.UPDATE_STORE:
      return action.payload;
    default:
      return state;
  }
};

export default storeReducer;

import { ActionType } from "../action/types";
import {
  Admin,
  getAdminAction,
  updateAdminAction,
  postAdminAction,
} from "../Interfaces";

type Action = getAdminAction | updateAdminAction | postAdminAction;

export const adminReducer = (state: Admin[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_ADMIN:
      return action.payload;
    case ActionType.UPDATE_ADMIN:
      return action.payload;
    case ActionType.POST_ADMIN:
      return action.payload;
    default:
      return state;
  }
};

export default adminReducer;

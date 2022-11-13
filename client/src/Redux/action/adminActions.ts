import axios from "axios";
import { ActionType } from "./types";
import { Dispatch } from "redux";
import { Admin, getAdminAction, updateAdminAction } from "../Interfaces";

export const getAdmin = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.get<Admin[]>("http://localhost:3001/api/admin");
    dispatch<getAdminAction[]>({
      type: ActionType.GET_ADMIN,
      payload: data.data,
    });
  };
};

export const updateAdmin = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.put<Admin[]>("http://localhost:3001/api/admin");
    dispatch<updateAdminAction[]>({
      type: ActionType.UPDATE_ADMIN,
      payload: data.data,
    });
  };
};

export const postAdmin = () => {
  return async function (dispatch: Dispatch) {
    const data = await axios.post<Admin[]>("http://localhost:3001/api/admin");
    dispatch<postAdminAction[]>({
      type: ActionType.POST_ADMIN,
      payload: data.data,
    });
  };
};

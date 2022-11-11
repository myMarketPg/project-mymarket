import { ActionType } from "../action/types";

export interface Seller {
  id: string;
  name: string;
  mail: string;
  password: string;
}

export interface Buyer {
  id: string;
  name: string;
  mail: string;
  password: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  rating: number;
  description: string;
}

export interface stateDashboardSeller {
  buyers: object[];
  allBuyers: object[];
}

export interface actionDashboardSeller {
  type: string;
  payload: string;
}

export interface getAllBuyersAction {
  type: ActionType.GET_ALL_BUYERS;
  payload: Buyer[];
}

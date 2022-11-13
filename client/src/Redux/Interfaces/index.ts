import { ActionType } from "../action/types";

export interface StoreState {
  buyers: Buyer[];
  products: Product[];
  store: Store[];
  admin: Admin[];
}

export interface Admin {
  id: string;
  userName: string;
  password: string;
}

export interface Buyer {
  id: string;
  name: string;
  phoneNum: number;
  email: string;
  password: string;
  addres: string;
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
  featured: boolean;
}

export interface Store {
  id: string;
  banner: string;
  logo: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  adress: string;
  state: string;
  zip: string;
}

export interface getAllBuyersAction {
  type: ActionType.GET_ALL_BUYERS;
  payload: Buyer[];
}

export interface getAllProductsAction {
  type: ActionType.GET_ALL_PRODUCTS;
  payload: Product[];
}

export interface getProductDetailAction {
  type: ActionType.GET_PRODUCT_DETAIL;
  payload: Product[];
}

export interface getStoreAction {
  type: ActionType.GET_STORE;
  payload: Store[];
}

export interface updateStoreAction {
  type: ActionType.UPDATE_STORE;
  payload: Store[];
}

export interface getAdminAction {
  type: ActionType.GET_ADMIN;
  payload: Admin[];
}

export interface updateAdminAction {
  type: ActionType.UPDATE_ADMIN;
  payload: Admin[];
}

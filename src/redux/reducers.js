import { combineReducers } from "redux";
import CustomerReducer from "pages/customers/redux/reducer";
import TransactionReducer from "pages/transactions/redux/reducer";
import OrderReducer from "pages/orders/redux/reducer";
import ProductReducer from "pages/products/redux/reducer";
import WalletReducer from "pages/wallets/redux/reducer";
import DashboardReducer from "pages/dashboard/redux/reducer";

export default combineReducers({
  customer: CustomerReducer,
  transaction: TransactionReducer,
  order: OrderReducer,
  product: ProductReducer,
  wallet: WalletReducer,
  dashboard: DashboardReducer,
});

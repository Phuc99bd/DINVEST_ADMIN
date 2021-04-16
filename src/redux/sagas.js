import { all } from "redux-saga/effects";
import CustomerSaga from "pages/customers/redux/operation";
import TransactionSaga from "pages/transactions/redux/operation";
import OrderSaga from "pages/orders/redux/operation";
import ProductSaga from "pages/products/redux/operation";
import WalletSaga from "pages/wallets/redux/operation";
import DashboardSaga from "pages/dashboard/redux/operation";

export default function* rootSaga() {
  yield all([
    CustomerSaga(),
    TransactionSaga(),
    OrderSaga(),
    ProductSaga(),
    WalletSaga(),
    DashboardSaga(),
  ]);
}

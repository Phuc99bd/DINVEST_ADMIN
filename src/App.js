import React, { useEffect, useState } from "react";

import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import { ToastContainer } from "react-toastify";

import { ROUTE, LANGUAGE, TOKEN } from "commons/constants";
import { PrivateLayout, PublicLayout } from "commons/layouts";
import axios from "helpers/AxiosHelper";

import messages_en from "translations/en.json";

import { useDispatch } from "react-redux";
import Dashboard from "pages/dashboard";
import OrderPage from "pages/orders";
import ProductPage from "pages/products";
import WalletPage from "pages/wallets";
import TransactionPage from "pages/transactions";
import SettingPage from "pages/settings";
import CustomerPage from "pages/customers";

const LANGUAGE_DEFAUL = "en";
const messages = {
  en: messages_en,
};

const languageBrowser = navigator.language.split(/[-_]/)[0];
const languageLocal = localStorage.getItem(LANGUAGE);

const isLogin = () => {
  const authToken = Cookies.get(TOKEN);
  return Boolean(authToken);
};

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <PublicLayout {...rest}>
            <Component {...props}></Component>
          </PublicLayout>
        )
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        // isLogin() ?
        <PrivateLayout {...rest}>
          <Component {...props} />
        </PrivateLayout>
        // ) : (
        // <Redirect
        //   to={{
        //     pathname: `${ROUTE.LOGIN}`,
        //     state: { from: props.location },
        //   }}
        // />
      )}
    />
  );
};

const App = () => {
  const language = languageLocal || languageBrowser;
  const [showLoading, setShowLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin()) {
      // dispatch(actions.getProfile({}, () => {}));
    }
  }, []);
  return (
    <div className="App">
      <ToastContainer />

      {/* {showLoading && (
        <div className="loader loading">
          <span>
            <ChromeOutlined className="image-loading" />
          </span>
        </div>
      )} */}
      <IntlProvider locale={language} messages={messages[LANGUAGE_DEFAUL]}>
        <Router>
          <PrivateRoute exact path={ROUTE.DASHBOARD} component={Dashboard} />
          {/* <PrivateRoute exact path={ROUTE.LOGOUT} component={Dashboard} /> */}
          <PrivateRoute exact path={ROUTE.ORDER} component={OrderPage} />
          <PrivateRoute exact path={ROUTE.PRODUCT} component={ProductPage} />
          <PrivateRoute exact path={ROUTE.WALLETS} component={WalletPage} />
          <PrivateRoute
            exact
            path={ROUTE.TRANSACTION}
            component={TransactionPage}
          />
          <PrivateRoute exact path={ROUTE.SETTING} component={SettingPage} />
          <PrivateRoute exact path={ROUTE.CUSTOMER} component={CustomerPage} />
        </Router>
      </IntlProvider>
    </div>
  );
};

export default App;

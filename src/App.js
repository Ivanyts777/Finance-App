// Moduls
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";

import { navigation } from "./constants";

// Components
import Header from "./Components/Header/Header";
import Diagram from "./Components/Diagram/Diagram";
import CurrencyExchage from "./Components/CurrencyExchage/CurrencyExchage";

// Containers
import Main from "./Containers/Main/Main";
// import Login from "./Containers/Login/Login";
// import Registration from "./Containers/Registration/Registration";

// CSS
import "./App.css";

const Login = lazy(() => import("./Containers/Login/Login"));
const Registration = lazy(() => import("./Containers/Registration/Registration"));

const App = () => {
  const { loader, error, token } = useSelector((state) => state);
  return (
    <>
      {loader && (
        <div className="loader">
          <Loader type="ThreeDots" color="#284060" height={300} width={300} />
        </div>
      )}
      {error && <h1>{Error}</h1>}
      <Suspense fallback={<p>Compaling...</p>}>
        <Header />
        <main className="main">
          <Switch>
            <Route path={navigation.main} exact render={(props) => <Main {...props} />} />
            <Route path={navigation.login} render={(props) => <Login {...props} />} />
            <Route path={navigation.registration} render={(props) => <Registration {...props} />} />
            <Route path={navigation.diagram} render={(props) => <Diagram {...props} />} />
            <Route path={navigation.currency} render={(props) => <CurrencyExchage {...props} />} />
            <Redirect to={navigation.main} />
          </Switch>
        </main>
        {/* ЗАКОМЕНТОВАНИЙ ТЕКСТ НЕ ЧІПАЄМО! */}
        {/* {token && (
          <>
            <Header />
            <Menu />
          </>
        )}
        <main className="main">
          <Switch>
            {token ? (
              <>
                <Route path={navigation.main} exact render={(props) => <Main {...props} />} />
                <Redirect to={navigation.main} />
              </>
            ) : (
              <>
                <Route path={navigation.login} render={(props) => <Login {...props} />} />
                <Route path={navigation.registration} render={(props) => <Registration {...props} />} />
                <Redirect to={navigation.registration} />
              </>
            )}
          </Switch>
        </main> */}
        {/* ЗАКОМЕНТОВАНИЙ ТЕКСТ НЕ ЧІПАЄМО! */}
      </Suspense>
    </>
  );
};

export default App;

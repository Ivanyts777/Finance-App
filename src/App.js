// Moduls
import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

import { useDispatch, useSelector } from "react-redux";

import { navigation } from "./constants";
import { setSizeWindow } from "./redux/Actions";

// Components
import Header from "./Components/Header/Header";
import Diagram from "./Components/Diagram/Diagram";
import CurrencyExchage from "./Components/CurrencyExchage/CurrencyExchage";
import Error from "./Components/Error/Error";

// Containers
import Main from "./Containers/Main/Main";
// import Login from "./Containers/Login/Login";
// import Registration from "./Containers/Registration/Registration";

// CSS
import "./App.css";
import { getUserData } from "./Components/Operations/operationsBD";

const Login = lazy(() => import("./Containers/Login/Login"));
const Registration = lazy(() =>
  import("./Containers/Registration/Registration")
);
const App = () => {
  const { windowSize } = useSelector((state) => state.global);
  const { error, token, user } = useSelector((state) => state.session);
  const { loader } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  window.onresize = ({ target }) => {
    dispatch(setSizeWindow(target.innerWidth));
  };
  useEffect(() => {
    if (token && user.id) {
      dispatch(getUserData(token, user.id));
    }
  }, [dispatch, token, user.id]);
  return (
    <>
      {loader && (
        <div className="loader">
          <Loader type="ThreeDots" color="#284060" height={300} width={300} />
        </div>
      )}
      {error && <Error text={error} />}
      <Suspense fallback={<p>Compaling...</p>}>
        {token && <Header />}
        <main className={token ? "main" : "main guest"}>
          <Switch>
            {token ? (
              <>
                <Route
                  path={navigation.main}
                  exact
                  render={(props) => <Main {...props} />}
                />
                <Route
                  path={navigation.diagram}
                  render={(props) => <Diagram {...props} />}
                />
                {windowSize <= 748 ? (
                  <Route
                    path={navigation.currency}
                    render={(props) => <CurrencyExchage {...props} />}
                  />
                ) : null}

                <Redirect to={navigation.main} />
              </>
            ) : (
              <>
                <Route
                  path={navigation.login}
                  render={(props) => <Login {...props} />}
                />
                <Route
                  path={navigation.registration}
                  render={(props) => <Registration {...props} />}
                />
                <Redirect to={navigation.registration} />
              </>
            )}
          </Switch>
        </main>
      </Suspense>
    </>
  );
};

export default App;

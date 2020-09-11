// Moduls
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";

import { navigation } from "./vars";

// CSS
import "./App.css";

import Header from "./Components/Header/Header";

// const Login = lazy(() => import("./Containers/Sing/Login"));
// const Registration = lazy(() => import("./Containers/Sing/Registration"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<p>Compaling...</p>}>
        <Header />
        <main className="main">
          <Switch>
            {/* <Route path={navigation.home} exact render={(props) => <Home {...props} />} /> */}
            {/* {!options.Token && (
              <>
                <Route path={navigation.login} render={(props) => <Login {...props} />} />
                <Route path={navigation.registration} render={(props) => <Registration {...props} />} />
              </>
            )} */}
            <Redirect to="/" />
          </Switch>
        </main>
      </Suspense>
    </div>
  );
};

// class App extends Component {
//   state = {
//     loader: true,
//   };
//   loaderToggle = (value) => {
//     this.setState({
//       loader: value,
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         {this.state.loader && (
//           <span className="loader">
//             <Loader type="Oval" color="#00BFFF" height={300} width={300} />
//           </span>
//         )}
//         <Suspense fallback={<p>Compaling...</p>}>
//           <Header />
//           <main className="main">
//             <Switch>
//               {/* <Route path="/" exact render={(props) => <Home {...props} {...this} />} /> */}
//               {/* <Route path="/movies" exact render={(props) => <Movies {...props} {...this} />} /> */}
//               {/* <Route path="/movies/favorite" exact render={(props) => <Favorite {...props} {...this} />} /> */}
//               {/* <Route path="/movies/:id" render={(props) => <MovieDetailsPage {...props} {...this} />} /> */}
//               <Route path="/actors/:id" render={(props) => <ActorsDetailsPage {...props} {...this} />} />
//               <Redirect to="/" />
//             </Switch>
//           </main>
//         </Suspense>
//       </div>
//     );
//   }
// }

export default App;

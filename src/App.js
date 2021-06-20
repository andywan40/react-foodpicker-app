import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Cuisine from "./components/Cuisine";
import Dish from "./components/Dish";
import Page from "./components/Page";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Page>
              <Home {...routeProps} />
            </Page>
          )}
        />
        <Route
          exact
          path="/:cuisine"
          render={(routeProps) => (
            <Page>
              <Cuisine {...routeProps} />
            </Page>
          )}
        />
        <Route
          exact
          path="/:cuisine/:dish"
          render={(routeProps) => (
            <Page>
              <Dish {...routeProps} />
            </Page>
          )}
        />
        <Route
          path="*"
          render={(routeProps) => (
            <Redirect to="/"></Redirect>
          )}
        />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

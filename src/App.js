import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Cuisine from "./components/Cuisine";
import Dish from "./components/Dish";
import CuisineRecipeList from "./components/CuisineRecipeList";
import DishRecipeList from "./components/DishRecipeList";
import Recipe from "./components/Recipe";
import Page from "./components/Page";


function App() {
  return (
    <BrowserRouter>
    <div className="App" data-testid="app">
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
          path="/recipelist/cuisine/:cuisine"
          render={(routeProps) => (
            <Page>
              <CuisineRecipeList {...routeProps} />
            </Page>
          )}
        />
        <Route
          exact
          path="/recipelist/:cuisine/:dish"
          render={(routeProps) => (
            <Page>
              <DishRecipeList {...routeProps} />
            </Page>
          )}
        />
        <Route
          exact
          path="/recipe/:cuisine/:dish"
          render={(routeProps) => (
            <Page>
              <Recipe {...routeProps} />
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

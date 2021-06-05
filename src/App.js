import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Dish from './pages/Dish';
import Page from './components/Page';

console.log(process.env.REACT_APP_UNSPLASH_API_KEY)
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(routeProps) =>
          <Page>
            <Home {...routeProps}/> 
          </Page>
        }/>
        <Route exact path="/:cuisine" render={(routeProps) =>
          <Page>
            <Cuisine {...routeProps}/> 
          </Page>
        }/>
        <Route exact path="/:cuisine/:dish" render={(routeProps) =>
          <Page>
            <Dish {...routeProps}/> 
          </Page>
        }/>
      </Switch>
      
    </div>
  );
}

export default App;

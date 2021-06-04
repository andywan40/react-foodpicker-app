import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Dish from './pages/Dish';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(routeProps) =>
          <Page>
            <Home {...routeProps}/> 
          </Page>
        }/>
        <Route exact path="/cuisine/:cuisine" render={(routeProps) =>
          <Page>
            <Cuisine {...routeProps}/> 
          </Page>
        }/>
        <Route exact path="/dish/:dish" render={(routeProps) =>
          <Page>
            <Dish {...routeProps}/> 
          </Page>
        }/>
      </Switch>
      
    </div>
  );
}

export default App;

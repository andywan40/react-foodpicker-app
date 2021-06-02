import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
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
        <Route exact path="/test">
          <h1>TEST</h1>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPageContainer } from '../containers/LandingPageContainer';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <LandingPageContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
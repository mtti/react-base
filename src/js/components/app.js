import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './front-page';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={FrontPage} />
      </Switch>
    );
  }
}
export default App;

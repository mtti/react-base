import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

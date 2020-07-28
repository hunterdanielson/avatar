import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DetailDisplay from '../../containers/detail/DetailDisplay';
import ListDisplay from '../../containers/list/ListDisplay';

export default function App() {
  return (
    <Router>
      <h1>Avatar Characters</h1>
      <Switch>
        <Route exact path='/' component={ListDisplay}/>
        <Route path='/characters/:id' component={DetailDisplay}/>
      </Switch>
    </Router>
  );
}

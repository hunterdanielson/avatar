import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ListHook from '../../containers/list/ListHook';
import DetailHook from '../../containers/detail/DetailHook';

export default function App() {
  return (
    <Router>
      <h1>Avatar Characters</h1>
      <Switch>
        <Route exact path='/' component={ListHook}/>
        <Route path='/characters/:id' component={DetailHook}/>
      </Switch>
    </Router>
  );
}

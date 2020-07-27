import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ListHook from '../../containers/list/ListHook';
// import Detail from '../detail/Detail';

export default function App() {
  return (
    <Router>
      <h1>Avatar Characters</h1>
      <Switch>
        <Route path='/' component={ListHook}/>
        {/* <Route exact path='/characters/:id' component={Detail}/> */}
      </Switch>
    </Router>
  );
}

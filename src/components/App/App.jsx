import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../header/Header';
import DetailPage from '../../containers/detail/DetailPage';
import ListPage from '../../containers/list/ListPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ListPage}/>
        <Route path='/characters/:id' component={DetailPage}/>
      </Switch>
    </Router>
  );
}

import React from 'react';
import {
  Router,
  Route
} from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import history from './history';
// import Showroom from '../components/portals/showroom';

const BasicRouting = () => {
  return ( 
    <Router history={history}>
    <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/showroom" component={Showroom} /> */}
    </div>
    </Router>
  )
}


export default (BasicRouting);
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Main from './main/main'

const getRoutes = function(props, loginHandler) {
  return (
    <ul className="nav">
      <Route name="Main" component={Main} />
      <Switch>
        <Route 
        exact path="/" 
        render={() => <Home {...props}/>}
        name="Home"
        />
      </Switch>
    </ul>
  )
};

export default getRoutes;



import React from 'react';
import { Switch, Route } from 'react-router-dom';

const TopicRoute = ({ routes }: any) => {
  return (
    <Switch>
      {routes.map((route: any) => (
        <Route
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
    </Switch>
  );
};

export default TopicRoute;

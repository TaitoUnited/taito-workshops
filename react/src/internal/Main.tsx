import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { routes } from './data';

function Main() {
  return (
    <Wrapper>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          render={() => (
            <Switch>
              {route.routes.map(subroute => {
                const path = `${route.path}${subroute.path}`;

                return (
                  <Route
                    exact
                    path={path}
                    component={subroute.component}
                    key={path}
                  />
                );
              })}

              <Route>
                <h3>Pick exercise from sidebar</h3>
              </Route>
            </Switch>
          )}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background-color: ${props => props.theme.primary.base};
  grid-area: main;
  padding: 16px;
`;

export default Main;

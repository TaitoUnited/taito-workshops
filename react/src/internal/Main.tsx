import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import pickExerciseImage from './assets/teaching.svg';
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
                <PickExercise>
                  <PickExerciseImage src={pickExerciseImage} />
                </PickExercise>
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

const PickExercise = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const PickExerciseImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
`;

export default Main;

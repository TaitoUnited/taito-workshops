import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { routes } from './data';
import { useExerciseMatch } from './utils';

function Description() {
  const { topic, selectedExercise } = useExerciseMatch();
  if (!topic) return null;

  const topicRoute = routes.find(r => r.path === `/${topic.slug}`);
  const exerciseRoute = topicRoute?.routes.find(
    r => r.path === `/${selectedExercise}`
  );

  return (
    <Wrapper>
      <ReactMarkdown
        source={exerciseRoute?.component.description}
        renderers={{
          link: props => (
            <a href={props.href} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.primary.base};
  grid-area: description;
  padding: 16px;
`;

export default Description;

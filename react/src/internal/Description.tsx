import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { IoIosArrowRoundUp } from 'react-icons/io';

import { routes } from './data';
import { useExerciseMatch } from './utils';

function Description() {
  const [isOpen, setOpen] = React.useState(true);
  const { topic, selectedExercise } = useExerciseMatch();
  if (!topic) return null;

  const topicRoute = routes.find(r => r.path === `/${topic.slug}`);
  const exerciseRoute = topicRoute?.routes.find(
    r => r.path === `/${selectedExercise}`
  );

  return (
    <Wrapper>
      <DescriptionHeader onClick={() => setOpen(prev => !prev)}>
        <IoIosArrowRoundUp
          size={20}
          style={{
            transform: `rotate(${isOpen ? 0 : 180}deg)`,
            transition: 'transform 200ms ease-in-out',
          }}
        />
        <span>{isOpen ? 'Hide description' : 'Show description'}</span>
      </DescriptionHeader>

      {isOpen && (
        <ReactMarkdown
          source={
            exerciseRoute?.component.description ||
            '**Description preview is missing - check the code!**'
          }
          renderers={{
            link: props => (
              <a href={props.href} target="_blank" rel="noopener noreferrer">
                {props.children}
              </a>
            ),
          }}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.primary.dark1};
  grid-area: description;
  padding: 8px 16px;
`;

const DescriptionHeader = styled.button`
  margin: 0;
  width: 100%;
  border: none;
  background: none;
  color: ${props => props.theme.primary.light3};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;

  & span {
    margin-left: 4px;
  }
`;

export default Description;

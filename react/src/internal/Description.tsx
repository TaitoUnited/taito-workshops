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

  const topicRoute = routes.find((r) => r.path === `/${topic.slug}`);
  const exerciseRoute = topicRoute?.routes.find(
    (r) => r.path === `/${selectedExercise}`
  );

  if (!exerciseRoute) {
    return <Wrapper>Pick an exercise from the sidebar</Wrapper>;
  }

  return (
    <Wrapper>
      <DescriptionHeader onClick={() => setOpen((prev) => !prev)}>
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
          className="md"
          source={
            exerciseRoute?.component.description ||
            '**Description preview is missing - check the code!**'
          }
          renderers={{
            inlineCode: CodeBlock,
            link: (props) => (
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
  grid-area: description;
  padding: 8px 16px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  ${(p) => p.theme.effects.frostedGlass}

  & .md {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const DescriptionHeader = styled.button`
  margin: 0;
  width: 100%;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.primary.light};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  cursor: pointer;

  & span {
    margin-left: 4px;
  }
`;

const CodeBlock = styled.code`
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  ${p => p.theme.effects.frostedGlassDark}
`;

export default Description;

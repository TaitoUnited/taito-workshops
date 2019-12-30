import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HEADER_HEIGHT } from './constants';
import { useExerciseMatch } from './utils';

interface Props {
  onTopicSwitch: () => any;
}

function Sidebar({ onTopicSwitch }: Props) {
  const { topic, topicExercises, selectedExercise } = useExerciseMatch();

  return (
    <Wrapper>
      <SwitchTopic onClick={onTopicSwitch}>Switch topic</SwitchTopic>

      <SidebarContent>
        {topic && <SelectedTopic>{topic.label}</SelectedTopic>}

        {topic && topicExercises && (
          <ExerciseList>
            {topicExercises.map(exercise => (
              <Exercise
                key={exercise.label}
                isSelected={selectedExercise === exercise.num}
              >
                <ExerciseLink to={`/${topic.slug}/${exercise.num}`}>
                  {exercise.label}
                </ExerciseLink>
              </Exercise>
            ))}
          </ExerciseList>
        )}
      </SidebarContent>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  background-color: ${props => props.theme.primary.base};
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
`;

const SwitchTopic = styled.button`
  border: none;
  background-color: ${props => props.theme.primary.light1};
  border-radius: 4px;
  height: ${HEADER_HEIGHT - 16}px;
  margin: 8px 16px;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.primary.light2};
  }
  &:active {
    opacity: 0.7;
  }
`;

const SidebarContent = styled.div`
  padding: 16px;
`;

const SelectedTopic = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;

const ExerciseList = styled.ol`
  list-style: none;
  padding: 0;
`;

const Exercise = styled.li<{ isSelected: boolean }>`
  position: relative;
  padding: 12px 0px;
  display: flex;
  align-items: center;

  &:before {
    content: ${props => (props.isSelected ? '""' : '')};
    position: absolute;
    left: -16px;
    height: 100%;
    width: 6px;
    background-color: ${props => props.theme.primary.light3};
  }
`;

const ExerciseLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export default Sidebar;

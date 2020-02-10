import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle, IoIosSync } from 'react-icons/io';

import { HEADER_HEIGHT } from './constants';
import { useExerciseMatch } from './utils';

interface Props {
  onTopicSwitch: () => any;
  onToggleMinimized: () => any;
  isMinimized: boolean;
}

function Sidebar({ onTopicSwitch, isMinimized, onToggleMinimized }: Props) {
  const { topic, topicExercises, selectedExercise } = useExerciseMatch();

  return (
    <Wrapper>
      <SwitchTopic onClick={onTopicSwitch}>
        {isMinimized ? <IoIosSync size={24} /> : 'Switch topic'}
      </SwitchTopic>

      <SidebarContent>
        {topic && (
          <SelectedTopic>
            {isMinimized ? topic.label.slice(0, 2) : topic.label}
          </SelectedTopic>
        )}

        {topic && topicExercises && (
          <ExerciseList>
            {topicExercises.map(exercise => (
              <ExerciseItem
                key={exercise.label}
                isSelected={selectedExercise === exercise.num}
              >
                <ExerciseLink to={`/${topic.slug}/${exercise.num}`}>
                  {isMinimized ? `E${exercise.num}` : exercise.label}
                </ExerciseLink>
              </ExerciseItem>
            ))}
          </ExerciseList>
        )}
      </SidebarContent>

      <SidebarFooter>
        <MinimizeButton onClick={onToggleMinimized}>
          <IoIosArrowDropleftCircle
            size={24}
            style={{
              transform: `rotate(${isMinimized ? 180 : 0}deg)`,
              transition: 'transform 200ms ease-in-out',
            }}
          />
        </MinimizeButton>
      </SidebarFooter>
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
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.primary.light2};
  }
  &:active {
    opacity: 0.7;
  }
`;

const SidebarContent = styled.div`
  padding: 16px;
  flex: 1;
`;

const SelectedTopic = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

const ExerciseList = styled.ol`
  list-style: none;
  padding: 0;
`;

const ExerciseItem = styled.li<{ isSelected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => (props.isSelected ? props.theme.primary.light3 : '#fff')};
  font-weight: ${props => (props.isSelected ? 500 : 400)};

  &:before {
    content: ${props => (props.isSelected ? '""' : '')};
    position: absolute;
    left: -16px;
    height: 100%;
    width: 6px;
    background-color: ${props => props.theme.primary.light3};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const ExerciseLink = styled(Link)`
  display: block;
  width: 100%;
  color: inherit;
  text-decoration: none;
  padding: 12px 0px;
`;

const SidebarFooter = styled.div`
  padding: 0px 16px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MinimizeButton = styled.button`
  border: none;
  margin: none;
  background: none;
  padding: 8px;
  border-radius: 8px;
  color: ${props => props.theme.primary.light2};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.primary.light1};
    color: ${props => props.theme.primary.light3};
  }

  &:active {
    opacity: 0.7;
  }
`;

export default Sidebar;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { topics } from './data';

interface Props {
  onTopicPicked: () => any;
}

function TopicPicker({ onTopicPicked }: Props) {
  return (
    <Wrapper>
      <Backdrop />
      <TopicsGrid>
        {topics.map(topic => (
          <Topic key={topic.slug} to={`/${topic.slug}`} onClick={onTopicPicked}>
            {topic.label}
          </Topic>
        ))}
      </TopicsGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const TopicsGrid = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 32px;
  z-index: 2;
  padding: 32px 0px;
`;

const Topic = styled(Link)`
  background-color: ${props => props.theme.primary.light2};
  border-radius: 8px;
  padding: 16px;
  color: #fff;
  font-size: 24px;
  line-height: 1.4;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    opacity: 0.7;
  }
`;

export default TopicPicker;

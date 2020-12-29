import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { topics } from './data';

interface Props {
  onClose: () => any;
}

function TopicPicker({ onClose }: Props) {
  return (
    <Wrapper>
      <Backdrop onClick={onClose} />
      <TopicsGrid>
        {topics.map((topic) => (
          <Topic key={topic.slug} to={`/${topic.slug}`} onClick={onClose}>
            {topic.label}
          </Topic>
        ))}
      </TopicsGrid>
    </Wrapper>
  );
}

const reveal = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
  background-color: rgba(15, 15, 25, 0.8);
  z-index: 1;
  animation: ${fadeIn} 200ms ease-in forwards;
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
  padding: 32px;
`;

const Topic = styled(Link)`
  cursor: pointer;
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
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
  z-index: 2;
  text-decoration: none;
  opacity: 0;
  animation: ${reveal} 200ms ease-in forwards;
  animation-delay: 100ms;
  backdrop-filter: blur(10px);
  ${(p) => p.theme.effects.frostedGlass}

  &:hover {
    background: ${(props) => props.theme.colors.primary.light};
  }
`;

export default TopicPicker;

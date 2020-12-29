import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import ModeSwitch from './ModeSwitch';
import { useExerciseMatch } from './utils';

function Header() {
  const { final, selectedExercise } = useExerciseMatch();

  return (
    <Wrapper>
      <TitleWrapper>
        <FaReact size={20} />
        <Title>React workshop</Title>
      </TitleWrapper>
      {selectedExercise && <ModeSwitch mode={final ? 'final' : 'exercise'} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-area: header;
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 8px;
  ${(p) => p.theme.effects.frostedGlass}
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > h1 {
    margin-left: 8px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;
`;

export default Header;

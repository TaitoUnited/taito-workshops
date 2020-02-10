import React from 'react';
import styled from 'styled-components';
import ModeSwitch from './ModeSwitch';
import { useExerciseMatch } from './utils';

function Header() {
  const { final, selectedExercise } = useExerciseMatch();

  return (
    <Wrapper>
      <Title>⚛︎ React workshop</Title>
      {selectedExercise && <ModeSwitch mode={final ? 'final' : 'exercise'} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #242733;
  grid-area: header;
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;
`;

export default Header;

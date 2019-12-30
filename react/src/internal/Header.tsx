import React from 'react';
import styled from 'styled-components';
import ModeSwitch from './ModeSwitch';
import { useExerciseMatch } from './utils';
import { useHistory } from 'react-router-dom';

function Header() {
  const { final, selectedExercise } = useExerciseMatch();

  return (
    <Wrapper>
      {selectedExercise && <ModeSwitch mode={final ? 'final' : 'exercise'} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #242733;
  grid-area: header;
  display: flex;
  padding: 8px;
  justify-content: flex-end;
`;

export default Header;

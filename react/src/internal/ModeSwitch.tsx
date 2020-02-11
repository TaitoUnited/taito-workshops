import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  mode: 'final' | 'exercise';
}

const ModeSwitch = ({ mode }: Props) => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <SwitchOption
        isActive={mode === 'exercise'}
        to={`${pathname.replace('/final', '')}`}
      >
        Exercise
      </SwitchOption>

      <Gap />

      <SwitchOption
        isActive={mode === 'final'}
        to={pathname.includes('final') ? pathname : `${pathname}/final`}
      >
        Final
      </SwitchOption>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${props => props.theme.primary.dark1};
  border-radius: 6px;
  padding: 4px;
  display: flex;
`;

const SwitchOption = styled(Link)<{ isActive: boolean }>`
  border: none;
  text-decoration: none;
  min-width: 70px;
  text-align: center;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: #fff;
  background-color: ${props =>
    props.isActive ? props.theme.primary.light1 : 'transparent'};

  &:hover {
    background-color: ${props =>
      props.isActive ? props.theme.primary.light1 : props.theme.primary.base};
  }
`;

const Gap = styled.div`
  width: 4px;
`;

export default ModeSwitch;

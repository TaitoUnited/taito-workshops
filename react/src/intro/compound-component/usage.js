import React from 'react';
import styled from 'styled-components';

import Dropmenu from './index';

const Usage = () => (
  <>
    <h1>Compound Components</h1>
    <Wrapper>
      <Dropmenu trigger={<button>Toggle menu</button>}>
        <Dropmenu.Item>Menu item 1</Dropmenu.Item>
        <Dropmenu.Item>Menu item 2</Dropmenu.Item>
        <Dropmenu.Item>Menu item 3</Dropmenu.Item>
      </Dropmenu>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Usage;

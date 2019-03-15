import React from 'react';
import styled from 'styled-components';

import Mouse from './index';

const Usage = () => (
  <>
    <h1>Render Props</h1>
    <Wrapper>
      <Mouse>
        {({ x, y }) => (
          <Content>
            <h1>Mouse position:</h1>
            <div>X: {x}</div>
            <div>Y: {y}</div>
          </Content>
        )}
      </Mouse>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  padding: 16px;
  color: #fff;
`;

export default Usage;

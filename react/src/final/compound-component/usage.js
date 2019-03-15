import React from 'react';
import styled from 'styled-components';

import Tabs from './index';

const Usage = () => (
  <Tabs>
    <Tabs.Panel label="Panel 1">
      <PanelContent>Panel 1</PanelContent>
    </Tabs.Panel>
    <Tabs.Panel label="Panel 2">
      <PanelContent>Panel 2</PanelContent>
    </Tabs.Panel>
    <Tabs.Panel label="Panel 3">
      <PanelContent>Panel 3</PanelContent>
    </Tabs.Panel>
  </Tabs>
);

const PanelContent = styled.div`
  padding: 16px;
`;

export default Usage;

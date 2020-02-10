import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { HEADER_HEIGHT, SIDEBAR_WIDTH, theme } from './internal/constants';
import Header from './internal/Header';
import Sidebar from './internal/Sidebar';
import Description from './internal/Description';
import Main from './internal/Main';
import TopicPicker from './internal/TopicPicker';

const App = () => {
  const [isTopicPickerVisible, setTopicPickerVisible] = React.useState(false);
  const [isSidebarMinimized, setSidebarMinimized] = React.useState(false);

  return (
    <>
      <Wrapper isSidebarMinimized={isSidebarMinimized}>
        <Header />
        <Sidebar
          onTopicSwitch={() => setTopicPickerVisible(true)}
          onToggleMinimized={() => setSidebarMinimized(prev => !prev)}
          isMinimized={isSidebarMinimized}
        />
        <Description />
        <Main />
      </Wrapper>

      {isTopicPickerVisible && (
        <TopicPicker onClose={() => setTopicPickerVisible(false)} />
      )}
    </>
  );
};

const Wrapper = styled.div<{ isSidebarMinimized: boolean }>`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${props =>
      props.isSidebarMinimized ? 'auto' : `${SIDEBAR_WIDTH}px`} 1fr;
  grid-template-rows: ${HEADER_HEIGHT}px auto 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar description'
    'sidebar main';
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );
};

export default Root;

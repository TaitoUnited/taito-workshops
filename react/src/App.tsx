import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { HEADER_HEIGHT, theme } from './internal/constants';
import Header from './internal/Header';
import Sidebar from './internal/Sidebar';
import Main from './internal/Main';
import TopicPicker from './internal/TopicPicker';

const App = () => {
  const [isTopicPickerVisible, setTopicPickerVisible] = React.useState(false);

  return (
    <>
      <Wrapper>
        <Header />
        <Sidebar onTopicSwitch={() => setTopicPickerVisible(true)} />
        <Main />
      </Wrapper>

      {isTopicPickerVisible && (
        <TopicPicker onClose={() => setTopicPickerVisible(false)} />
      )}
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 260px 1fr;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr;
  grid-template-areas:
    'sidebar header'
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

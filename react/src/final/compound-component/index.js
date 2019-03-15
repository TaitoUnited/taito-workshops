import React from 'react';
import styled from 'styled-components';

const TabPanel = ({ children, style }) => (
  <div
    role="tabpanel"
    tabIndex={0}
    style={{ width: '100%', outline: 'none', ...style }}
  >
    {children}
  </div>
);

class Tabs extends React.Component {
  static Panel = TabPanel;

  state = {
    selectedTab: 0,
  };

  selectTab = (tabIndex: number) => {
    this.setState({ selectedTab: tabIndex });
  };

  render() {
    const { children } = this.props;
    const { selectedTab } = this.state;

    return (
      <TabsWrapper>
        <TabList role="tablist">
          {React.Children.map(children, (comp, index) => (
            <TabButton
              role="tab"
              selected={selectedTab === index}
              aria-selected={selectedTab === index ? 'true' : 'false'}
              onClick={() => this.selectTab(index)}
            >
              {comp.props.label}
            </TabButton>
          ))}
        </TabList>

        <Content>
          {React.Children.map(children, (comp, index) =>
            selectedTab === index ? comp : undefined
          )}
        </Content>
      </TabsWrapper>
    );
  }
}

const TabsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TabButton = styled.button`
  flex: 1;
  height: 48px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: ${props => (props.selected ? 600 : 400)};
  cursor: default;
  background: transparent;
  outline: none;
  color: ${props => props.selected ? 'blue' : '#888'};
  transition: border-color 0.2s ease-in;
  border: none;
  border-bottom: 4px solid ${props => props.selected ? 'blue' : '#ddd'};

  &:hover,
  &:focus,
  &:active {
    border-bottom: 4px solid ${props => props.selected ? 'darkblue' : '#ccc'};
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
`;

export default Tabs;

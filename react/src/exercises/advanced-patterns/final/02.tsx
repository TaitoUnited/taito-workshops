import React from 'react';

// Advanced Patterns - Exercise 2 | Final

type TabContextValue = {
  tabIndex: number;
  setTabIndex: (i: number) => void;
};

const TabContext = React.createContext<undefined | TabContextValue>(undefined);

const useTabs = () => {
  const context = React.useContext(TabContext);
  if (!context) throw Error('Missing Tabs component!');
  return context;
};

const Tabs = ({ children }: { children: React.ReactNodeArray }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <TabContext.Provider value={{ tabIndex, setTabIndex }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
    </TabContext.Provider>
  );
};

const List = ({ children }: { children: React.ReactNodeArray }) => {
  const { tabIndex, setTabIndex } = useTabs();
  return (
    <div style={{ display: 'flex' }}>
      {React.Children.map(
        children,
        (child, i) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            isCurrent: i === tabIndex,
            onClick: () => setTabIndex(i),
          })
      )}
    </div>
  );
};

const Tab = ({
  children,
  isCurrent,
  onClick,
}: {
  children: React.ReactNode;
  isCurrent?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      style={{ backgroundColor: isCurrent ? 'blue' : 'transparent' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Panels = ({ children }: { children: React.ReactNodeArray }) => {
  const { tabIndex } = useTabs();
  return (
    <div style={{ display: 'flex' }}>
      {React.Children.map(
        children,
        (child, i) =>
          tabIndex === i &&
          React.isValidElement(child) &&
          React.cloneElement(child)
      )}
    </div>
  );
};

const Panel = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Exercise = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panels>
        <Tabs.Panel>Tab Panel 1</Tabs.Panel>
        <Tabs.Panel>Tab Panel 2</Tabs.Panel>
        <Tabs.Panel>Tab Panel 3</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panels = Panels;
Tabs.Panel = Panel;

const Usage = () => {
  return <Exercise />;
};

export default Usage;

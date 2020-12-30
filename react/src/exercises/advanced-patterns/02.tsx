import React from 'react';

const description = `
**Advanced Patterns - Exercise 2**

- Implement a Tabs component that utilizes the Compound Component pattern
- Provide the currently active tab via context to the compound components
- Use \`React.Children\`, \`React.isValidElement\`, and \`React.cloneElement\` to render the child elements of \`List\` and \`Panels\` components
  - Pass the \`isCurrent\` and \`onClick\` props to \`Tab\` via \`React.cloneElement\`
- Don't worry about accessibility since it's not the focus of this exercise

TIPS:
- \`React.isValidElement\` needs to be used before calling \`React.cloneElement\` to satisfy TS

DOCS:
- [Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [React.Children](https://reactjs.org/docs/react-api.html#reactchildren)
- [React.isValidElement](https://reactjs.org/docs/react-api.html#isvalidelement)
- [React.cloneElement](https://reactjs.org/docs/react-api.html#cloneelement)
- [Context with TS](https://kentcdodds.com/blog/how-to-use-react-context-effectively#typescript--flow)
`;

type TabContextValue = {
  tabIndex: number;
  setTabIndex: (i: number) => void;
};

const TabContext = React.createContext<undefined | TabContextValue>(undefined);

const useTabs = () => {
  // Get the context value and return it if it exists
  return { tabIndex: 0, setTabIndex: (i: number) => {} }; // Remove this mock return value
};

const Tabs = ({ children }: { children: React.ReactNodeArray }) => {
  // Store the current tab index in state
  // Pass the correct context value to the provider
  return (
    <TabContext.Provider value={undefined}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
    </TabContext.Provider>
  );
};

const List = ({ children }: { children: React.ReactNodeArray }) => {
  const { tabIndex, setTabIndex } = useTabs();
  // Map through the children and clone each child and pass additional props to it
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      TODO: Tab list here
    </div>
  );
};

// No need to change Tab component
// Here we would add some ARIA attributes in the real-world implementation
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
  // Map through the children and only render the child if its index is
  // the same as the current tabIndex
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      TODO: Tab panels here
    </div>
  );
};

// No need to change Panel component
// Here we would add some ARIA attributes in the real-world implementation
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

Usage.description = description;

export default Usage;

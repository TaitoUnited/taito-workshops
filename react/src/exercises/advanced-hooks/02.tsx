import React from 'react';

const description = `
**Advanced Hooks - Exercise 2**

- Use your exercise 1 implementation of the Star Wars API and refactor it into a custom \`useSwapi\` hook
- The hook should return the \`search\` method and the state of the search so that they can be used in the consuming component

DOCS:
- [Extracting Hooks](https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook)
`;

const useSwapi = (/* Add any params if needed */) => {
  const API_URL = 'https://swapi.dev/api/people/?search=';
  // Implement
  return {};
};

const Exercise = () => {
  const swapi = useSwapi();

  return <div>TODO</div>;
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

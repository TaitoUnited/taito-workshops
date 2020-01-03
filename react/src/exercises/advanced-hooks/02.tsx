import React from 'react';

/*
Advanced Hooks - Exercise 2

- Use your exercise 1 implementation of the Star Wars API and refactor it into a custom `useSwapi` hook
- The hook should return the `search` method and the state of the search so that they can be used in the consuming component
*/

const useSwapi = (/* Add any params if needed */) => {
  const API_URL = 'https://swapi.co/api/people/?search=';
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

export default Usage;

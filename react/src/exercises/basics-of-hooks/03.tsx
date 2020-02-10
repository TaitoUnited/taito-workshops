import React from 'react';

const description = `
**Basics of Hooks - Exercise 3**

- Utilize \`React.useReducer\` instead of \`React.useState\` to implement the same component as in exercise 1
- You can use the pre-defined types for the reducer state and actions

TIPS:
- You can define the whole state in one object (like commonly done with Redux)
- Try to keep all the state related logic encapsulated inside the reducer

DOCS:
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
`;

const initialState = {};

type State = typeof initialState;

type Action =
  | { type: 'set-new-animal'; payload: string }
  | { type: 'reset-new-animal' }
  | { type: 'add-animal' }
  | { type: 'remove-animal'; payload: string };

const Exercise = () => {
  return <div>TODO</div>;
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

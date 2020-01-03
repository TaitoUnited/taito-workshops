import React from 'react';

/*
Basics of Hooks - Exercise 3

- Utilize `React.useReducer` instead of `React.useState` to implement the same component as in exercise 1
- You can use the pre-defined types for the reducer state and actions

TIP: You can define the whole state in one object like commonly done with Redux
TIP: Try to keep all the state related logic encapsulated inside the reducer
*/

const initialState = {
  newAnimal: '',
  animals: ['dog', 'cat', 'lion', 'elephant'],
};

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

export default Usage;

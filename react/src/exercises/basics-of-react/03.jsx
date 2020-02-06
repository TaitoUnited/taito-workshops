import React, { Component } from 'react';

const description = `
Basics of React - Exercise 3

- Display a text input
- Display the contents of the text input under the input
- Split the text input into its own component **without using state in the new component**
- Refactor if needed so that the Exercise component does not have to know about \`event\`
`;

class Exercise extends Component {
  render() {
    return <div>TODO</div>;
  }
}

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

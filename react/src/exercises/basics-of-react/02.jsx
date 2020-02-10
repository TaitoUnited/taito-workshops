import React, { Component } from 'react';

const description = `
Basics of React - Exercise 2

- Use a class component to render a list that was passed as props
- Add a checkbox next to each item
- Use state to store which items have been selected
- Bold the items that were selected
`;

class Exercise extends Component {
  render() {
    return <div>TODO</div>;
  }
}

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise items={['dog', 'cat', 'lion', 'giraffe']} />;
};

Usage.description = description;

export default Usage;

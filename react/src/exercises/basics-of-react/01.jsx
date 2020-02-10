import React, { Component } from 'react';

const description = `
Basics of React - Exercise 1

- Use a class component to render a bullet list (\`<ul>\`)
- Split the items into a separate ListItem component
- Pass the contents as children to the ListItem component
- Allow bolding of list items by using a prop named \`bold\`
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

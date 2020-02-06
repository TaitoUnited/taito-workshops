import React, { Component } from 'react';

const description = `
Basics of React - Exercise 4

- Fetch JSON data from [httpbin](https://httpbin.org/json) **once**
- Display the slideshow title from the data
- Create a button that will fetch the data again
- Show a loading message while the data is being loaded

TIPS:
- Use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
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

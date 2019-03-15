import React from 'react';

// Helper you can use to make the fetch take a bit longer for easier testing
const sleep = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

/* TODO:
 * Implement a render props component for fetching data from an URL.
 * It should track and handle the loading / error / data states and values
 * for the fetching flow.
 *
 * Check the Usage component to get started and see the needed render props
 * you need to implement.
 */

class Fetch extends React.Component {
  render() {
    return <div>TODO</div>
  }
}

export default Fetch;

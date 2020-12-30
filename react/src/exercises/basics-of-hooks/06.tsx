import React from 'react';

const description = `
**Basics of Hooks - Exercise 6**

- Implement the \`useWindowResize\` hook that attaches an event listener for the window resize event
- Remember to remove the event listener in the effect cleanup function
- Pass the dimensions of the window to the handler function when the window is resized

TIPS:
- You can read the width and height of the window via \`window.innerHeight/innerWidth\`

OPTIONAL:
- You can use \`requestAnimationFrame\` in the resize event callback to let the browser schedule the callback efficiently

DOCS:
- [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [Resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event#addEventListener_equivalent)
- [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
`;

const useWindowResize = (
  handler: (dimensions: { width: number; height: number }) => void
) => {
  // Implement
};

const Exercise = () => {
  useWindowResize(({ width, height }) =>
    console.log('Window resized!', width, height)
  );

  return <div>No visual output - open Devtools Console</div>;
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

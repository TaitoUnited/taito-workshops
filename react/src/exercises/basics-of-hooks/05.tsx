import React from 'react';

/*
Basics of Hooks - Exercise 5

1. Utilize `React.useLayoutEffect` to create an auto-growing textarea (normally textarea scrolls when content doesn't fit)
2. Every time the value of the textarea changes check if the scroll height is larger than the height of the textarea
3. If scroll height is larger than the height update the height of the textarea
3. Ignore textarea auto-shrinking when text is deleted since it will get a bit too hairy

TIP: Apply `border: 'none'` so that you don't have to take the border into account in the calculations
TIP: Use `getBoundingClientRect()` to get the height of an element
TIP: You can get the scroll height via `element.scrollHeight`

OPTIONAL:
- Extract all auto-grow logic into a custom hook
*/

const Exercise = () => {
  return <div>TODO</div>;
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;

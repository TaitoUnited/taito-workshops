import React from 'react';

const description = `
**Basics of Hooks - Exercise 5**

- Utilize \`React.useLayoutEffect\` to create an auto-growing textarea (normally textarea scrolls when content doesn't fit)
- Every time the value of the textarea changes check if the scroll height is larger than the height of the textarea
- If scroll height is larger than the height update the height of the textarea
- Ignore textarea auto-shrinking when text is deleted since it will get a bit too hairy

TIPS:
- By having \`border: 'none'\` you don't have to take the border into account in the calculations
- Use \`getBoundingClientRect()\` to get the height of an element
- You can get the scroll height via \`element.scrollHeight\`

OPTIONAL:
- Extract all auto-grow logic into a custom hook
`;

const Exercise = () => {
  return (
    <div>
      <textarea value={'TODO'} style={{ border: 'none' }} onChange={() => {}} />
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

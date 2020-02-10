import React from 'react';
import LazyComponent from './other/LazyComponent';
import lazyLib from './other/lazy-lib';

const description = `
**Performance - Exercise 2**

- Utilize dynamic import and \`React.lazy\` to lazy load \`LazyComponent\` and \`lazyLib\`
- Remember to use \`React.Suspense\` for fallback UI while the lazy component is being loaded
`;

const Inner = () => {
  const handleClick = () => {
    lazyLib.hello();
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <br />
      <LazyComponent />
    </div>
  );
};

const Exercise = () => {
  return (
    <div>
      <Inner />
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

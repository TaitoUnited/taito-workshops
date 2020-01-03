import React from 'react';

// Performance - Exercise 2 | Final

const LazyComponent = React.lazy(() => import('../other/LazyComponent'));

const Inner = () => {
  const handleClick = () => {
    import('../other/lazy-lib')
      .then(lazyLib => {
        lazyLib.default.hello();
      })
      .catch(err => {
        // Handle failure
      });
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
      <React.Suspense fallback="Loading...">
        <Inner />
      </React.Suspense>
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;

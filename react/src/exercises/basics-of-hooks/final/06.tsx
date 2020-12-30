import React from 'react';

// Basics of Hooks - Exercise 6 | Final

const useWindowResize = (
  handler: (dimensions: { width: number; height: number }) => void
) => {
  React.useEffect(() => {
    let frame = 0;

    const onResize = () => {
      frame = requestAnimationFrame(() =>
        handler({ width: window.innerWidth, height: window.innerHeight })
      );
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, [handler]);
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

export default Usage;

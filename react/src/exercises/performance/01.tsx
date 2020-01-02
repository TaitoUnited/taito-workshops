import React from 'react';

/*
Advanced Hooks - Exercise 2

1. Utilize `React.useCallback` and `React.memo` to improve the rendering performance of `Inner` component
   -> The `Inner` component should not render when the counter is incremented

TIP: Keep in mind the callback form of the setter function provided by `React.useState` 
*/

const Inner: React.FC<{ id: string; onClick: () => any }> = ({
  id,
  onClick,
}) => {
  console.log(`Inner ${id} rendered`);

  return (
    <div>
      <p>{Math.random()}</p>
      <button onClick={onClick}>Click {id} to also increment</button>
    </div>
  );
};

const Exercise = () => {
  const [counter, setCounter] = React.useState(0);
  const inc = () => setCounter(counter + 1);

  return (
    <div>
      {counter}&nbsp;
      <button onClick={inc}>➕</button>
      <Inner id="A" onClick={inc} />
      <Inner id="B" onClick={inc} />
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;

import React from 'react';

// Advanced Hooks - Exercise 2 | Final

const Inner: React.FC<{ id: string; onClick: () => any }> = React.memo(
  ({ id, onClick }) => {
    console.log(`Inner ${id} rendered`);

    return (
      <div>
        <p>{Math.random()}</p>
        <button onClick={onClick}>Click {id} to also increment</button>
      </div>
    );
  }
);

const Exercise = () => {
  const [counter, setCounter] = React.useState(0);
  const inc = React.useCallback(() => setCounter(c => c + 1), []);

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

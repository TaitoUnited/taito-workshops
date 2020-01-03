import React from 'react';

/*
Performance - Exercise 1

1. Utilize `React.useCallback`, `React.useMemo` and `React.memo` to improve the rendering performance of `Inner` component
-> The `Inner` component should not render when the counter is incremented

TIP: Keep in mind the callback form of the setter function provided by `React.useState`
-> https://reactjs.org/docs/hooks-reference.html#functional-updates
*/

interface InnerProps {
  id: string;
  data: any;
  onClick: () => any;
}

const Inner: React.FC<InnerProps> = ({ id, data, onClick }) => {
  console.log(`Inner ${id} rendered`);

  return (
    <div>
      <p>{Math.random()}</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={onClick}>Click {id} to also increment</button>
    </div>
  );
};

const Exercise = () => {
  const [counter, setCounter] = React.useState(0);
  const inc = () => setCounter(counter + 1);
  const data = { a: 1, b: 2, c: 3 };

  return (
    <div>
      {counter}&nbsp;
      <button onClick={inc}>➕</button>
      <Inner id="A" data={data} onClick={inc} />
      <Inner id="B" data={data} onClick={inc} />
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;
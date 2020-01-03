import React from 'react';

// Performance - Exercise 1 | Final

interface InnerProps {
  id: string;
  data: any;
  onClick: () => any;
}

const Inner: React.FC<InnerProps> = React.memo(({ id, data, onClick }) => {
  console.log(`Inner ${id} rendered`);

  return (
    <div>
      <p>{Math.random()}</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={onClick}>Click {id} to also increment</button>
    </div>
  );
});

const Exercise = () => {
  const [counter, setCounter] = React.useState(0);
  const inc = React.useCallback(() => setCounter(c => c + 1), []);
  const data = React.useMemo(() => ({ a: 1, b: 2, c: 3 }), []);

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

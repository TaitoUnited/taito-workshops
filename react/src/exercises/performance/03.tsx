import React from 'react';

const description = `
**Performance - Exercise 3**

- Utilizing your knowledge from previous exercises to improve the rendering performance

TIPS:
- Open your DevTools console to see when the cells are rendered

DOCS:
- [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
- [memo](https://reactjs.org/docs/react-api.html#reactmemo)
`;

const NUM_OF_CELLS = 1000;
const INITIAL_CELLS = Array(NUM_OF_CELLS).fill(0);

interface CellProps {
  index: number;
  count: number;
  updateCount: (index: number) => any;
}

const Cell = ({ index, count, updateCount }: CellProps) => {
  console.log(`Cell ${index} rendered`);
  return (
    <button onClick={() => updateCount(index)} style={{ width: 40 }}>
      {count}➕
    </button>
  );
};

const Exercise = () => {
  const [cellCounts, setCellCounts] = React.useState(INITIAL_CELLS);

  const updateCount = (index: number) => {
    setCellCounts(prev => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  return (
    <div>
      {cellCounts.map((count, i) => (
        <Cell key={i} index={i} count={count} updateCount={updateCount} />
      ))}
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

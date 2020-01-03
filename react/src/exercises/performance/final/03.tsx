import React from 'react';

// Performance - Exercise 3 | Final

const NUM_OF_CELLS = 1000;
const INITIAL_CELLS = Array(NUM_OF_CELLS).fill(0);

interface CellProps {
  index: number;
  count: number;
  updateCount: (index: number) => any;
}

const Cell = React.memo(({ index, count, updateCount }: CellProps) => {
  console.log(`Cell ${index} rendered`);
  return (
    <button onClick={() => updateCount(index)} style={{ width: 40 }}>
      {count}➕
    </button>
  );
});

const Exercise = () => {
  const [cellCounts, setCellCounts] = React.useState(INITIAL_CELLS);

  const updateCount = React.useCallback((index: number) => {
    setCellCounts(prev => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
  }, []);

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

export default Usage;

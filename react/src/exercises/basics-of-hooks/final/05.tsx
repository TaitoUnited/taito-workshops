import React from 'react';

// Basics of Hooks - Exercise 5 | Final

const Exercise = () => {
  const [value, setValue] = React.useState('');
  const [height, setHeight] = React.useState();
  const ref = React.useRef<HTMLTextAreaElement>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      const { scrollHeight } = ref.current;
      if (scrollHeight > height) setHeight(scrollHeight);
    }
  }, [value]);

  return (
    <div>
      <textarea
        ref={ref}
        value={value}
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
        style={{ height: height || 'auto', border: 'none' }}
      />
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;

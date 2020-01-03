import React from 'react';

// Basics of Hooks - Exercise 5 | Final

const useAutogrow = (value: string) => {
  const [height, setHeight] = React.useState();
  const ref = React.useRef<HTMLTextAreaElement>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      const { scrollHeight } = ref.current;
      if (scrollHeight > height) setHeight(scrollHeight);
    }
  }, [value]);

  const style = { height: height || 'auto' };

  return { ref, style }
}

const Exercise = () => {
  const [value, setValue] = React.useState('');
  const autogrow = useAutogrow(value);
  
  return (
    <div>
      <textarea
        ref={autogrow.ref}
        value={value}
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
        style={{ border: 'none', ...autogrow.style }}
      />
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;

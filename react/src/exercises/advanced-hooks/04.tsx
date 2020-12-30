import React from 'react';

/**
 * NOTE: This exercise is a bit convoluted since it embraces a more imperative
 * approach to updating state rather than a declarative approach which usually
 * is the right way to update state in React applications.
 *
 * However, `useImperativeHandle` can be handy in certain situations where
 * declaratively updating state and triggering side effects gets too messy.
 */

const description = `
**Advanced Hooks - Exercise 4**

- Implement a Sheet component that can snap between various snap points
- Utilize \`React.forwardRef\` to pass a ref through to the Sheet component
- Then attach a \`snapTo\` function to the ref with \`React.useImperativeHandle\`
- Finally use the ref and it's \`snapTo\` function to snap to each snap point when related button is pressed

DOCS:
- [forwardRef](https://reactjs.org/docs/forwarding-refs.html)
- [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
`;

type SheetRef = {
  snapTo: (i: number) => void;
};

type SheetProps = {
  initialSnap: number; // Initial snap point index
  snapPoints: number[]; // Pixel values for snap points
  children: React.ReactNode;
};

const Sheet = (props: SheetProps) => {
  const { children } = props;

  // Implement the current snap point state based on the initial snap point

  const sheetHeight = 0; // Calculate from `snapPoints`
  const currentSnapHeight = 0; // Calculate based on `snapPoints` and current snap index
  const translateY = sheetHeight - currentSnapHeight;

  // Enhance the `ref` with a `snapTo` function by using `React.useImperativeHandle`

  return (
    <div
      style={{
        height: sheetHeight,
        width: '25%',
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transition: 'transform 100ms ease',
        transform: `translateX(-50%) translateY(${translateY}px)`,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        backgroundColor: '#fff',
        color: '#000',
        padding: 16,
        boxShadow: '0px 0px 24px rgba(0,0,0,0.5)',
      }}
    >
      {children}
    </div>
  );
};

const Exercise = () => {
  // Create a ref and pass to `Sheet` (you can use the `SheetRef` type)

  // Implement this with the sheet ref
  const snapTo = (i: number) => {};

  return (
    <div>
      <Sheet initialSnap={0} snapPoints={[400, 200, 50]}>
        <strong>I'm a sheet, yey!</strong>
      </Sheet>

      <button onClick={() => snapTo(0)}>Snap to 400</button>
      <button onClick={() => snapTo(1)}>Snap to 200</button>
      <button onClick={() => snapTo(2)}>Snap to 50</button>
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

import React from 'react';

// Advanced Hooks - Exercise 4 | Final

type SheetRef = {
  snapTo: (i: number) => void;
};

type SheetProps = {
  initialSnap: number; // Initial snap point index
  snapPoints: number[]; // Pixel values for snap points
  children: React.ReactNode;
};

const Sheet = React.forwardRef<any, SheetProps>((props, ref) => {
  const { initialSnap, snapPoints, children } = props;
  const [currentSnap, setCurrentSnap] = React.useState(initialSnap);
  const sheetHeight = snapPoints[0];
  const currentSnapHeight = snapPoints[currentSnap];
  const translateY = sheetHeight - currentSnapHeight;

  React.useImperativeHandle(ref, () => ({
    snapTo: (i: number) => setCurrentSnap(i),
  }));

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
});

const Exercise = () => {
  const sheet = React.useRef<SheetRef>();
  const snapTo = (i: number) => sheet.current?.snapTo(i);

  return (
    <div>
      <Sheet ref={sheet} initialSnap={0} snapPoints={[400, 200, 50]}>
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

export default Usage;

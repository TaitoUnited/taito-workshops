import React from 'react';

export default function Modal({ close }: { close: () => any }) {
  return (
    <>
      <div
        onClick={close}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: 16,
          minWidth: 400,
          minHeight: 400,
          zIndex: 1,
          color: '#222',
        }}
      >
        It's me - Modal!
      </div>
    </>
  );
}

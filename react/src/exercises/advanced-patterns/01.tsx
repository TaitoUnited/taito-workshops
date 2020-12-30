import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './other/Modal';

const description = `
**Advanced Patterns - Exercise 1**

- Implement a Portal for a modal that is rendered outside of the main React app
- Use \`ReactDOM.createPortal\` to conditionally render the provided \`Modal\` component
- Mount the modal portal into \`document.body\`

DOCS:
- [Portals](https://reactjs.org/docs/portals.html#usage)
`;

interface ModalPortalProps {
  isOpen: boolean;
  close: () => any;
}

const ModalPortal = ({ isOpen, close }: ModalPortalProps) => {
  // Render the `Modal` component into a portal when the `isOpen` prop is true
  return isOpen ? null : null;
};

const Exercise = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <button onClick={open}>Open modal</button>
      <ModalPortal isOpen={isModalOpen} close={close} />
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

Usage.description = description;

export default Usage;

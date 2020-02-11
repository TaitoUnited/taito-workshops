import React from 'react';
import Modal from './other/Modal';

const description = `
**Advanced Patterns - Exercise 1**

- Implement a Portal for a modal that is rendered outside of the main React app
- Implement \`getPortalRoot\` that will get an existing or create a new div element
- Get the portal element ref on mount and then use \`ReactDOM.createPortal\` to conditionally render the provided \`Modal\` component

DOCS:
- [Portals](https://reactjs.org/docs/portals.html#usage)
- [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
- [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [document.body.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
`;

interface ModalPortalProps {
  isOpen: boolean;
  close: () => any;
}

const getPortalRoot = () => {
  let el = null;
  return el;
};

const ModalPortal = ({ isOpen, close }: ModalPortalProps) => {
  // Utilize `getPortalRoot` here
  return isOpen ? null : null; // Add imported `Modal` in conjunction with the portal
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

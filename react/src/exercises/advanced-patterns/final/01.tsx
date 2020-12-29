import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../other/Modal';

// Advanced Patterns - Exercise 1 | Final

interface ModalPortalProps {
  isOpen: boolean;
  close: () => any;
}

const ModalPortal = ({ isOpen, close }: ModalPortalProps) => {
  const comp = <Modal close={close} />;
  return isOpen ? ReactDOM.createPortal(comp, document.body) : null;
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

export default Usage;

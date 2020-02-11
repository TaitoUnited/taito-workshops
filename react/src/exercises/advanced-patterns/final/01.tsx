import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../other/Modal';

// Advanced Patterns - Exercise 1 | Final

interface ModalPortalProps {
  isOpen: boolean;
  close: () => any;
}

const getPortalRoot = () => {
  let el = document.getElementById('portal-root');
  if (el) return el;

  el = document.createElement('div');
  el.classList.add('portal-root');
  document.body.appendChild(el);

  return el;
};

const ModalPortal = ({ isOpen, close }: ModalPortalProps) => {
  const portalRef = React.useRef<HTMLElement>();

  React.useEffect(() => {
    const el = getPortalRoot();
    portalRef.current = el;
  }, []);

  if (!portalRef.current) return null;

  const comp = <Modal close={close} />;

  return isOpen ? ReactDOM.createPortal(comp, portalRef.current) : null;
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

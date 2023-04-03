import React, { useState, FC, useRef } from 'react';
import '../css/contextmodal.css';

interface ContextModalProps {
  comp: FC;
  children?: React.ReactNode;
}

const ContextModal: React.FC<ContextModalProps> = ({ comp: Component, children }) => {
  const [showModal, setShowModal] = useState(false);
  let modalTimeout: NodeJS.Timeout;

  const handleModalMouseEnter = () => {
    clearTimeout(modalTimeout)
    setShowModal(true);
  };

  const handleModalMouseLeave = () => {
    modalTimeout = setTimeout(() => {
      setShowModal(false);
    }, 300);
  };

  return (
    <>
      <span className="context-modal-base" onMouseOver={handleModalMouseEnter} onMouseLeave={handleModalMouseLeave}>
        {children}<sup>🕮</sup>
      </span>
      {showModal && (
        <div className="context-modal-wrapper">
          <div className="context-modal-spawn" 
            onMouseEnter={handleModalMouseEnter}
            onMouseLeave={handleModalMouseLeave}
          >
            <div className="context-modal-content"
              onMouseEnter={handleModalMouseEnter}
              onMouseLeave={handleModalMouseLeave}
            >
              <Component />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContextModal;
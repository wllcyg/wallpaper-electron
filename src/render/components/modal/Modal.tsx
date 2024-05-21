import React, { useEffect, useState } from 'react';
import { CSSTransition  } from 'react-transition-group'
import { ModalWrapper } from '@/render/components/modal/style';
import ReactDOM from 'react-dom';
interface ModelProps {
  open: boolean;
  onClose?: () => void;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Model :React.FC<ModelProps> = ({open,children,onClose}:React.PropsWithChildren<ModelProps>) => {
  const handleClose = () => {
    onClose && onClose();
  };
  return (
    ReactDOM.createPortal(
      <ModalWrapper>
        <CSSTransition
          in={open}
          timeout={300}
          classNames="modal"
          unmountOnExit
        >
          <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={handleClose}>×</button>
              {children}
            </div>
            <footer>
              
            </footer>
          </div>
        </CSSTransition>
      </ModalWrapper>,
      document.body
    )
  );
};

export default Model;

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  const { showModal, setShowModal } = props;
  return (
    <div
      className={classes.backdrop}
      onClick={() => setShowModal(!showModal)}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export const Modal = (props) => {
  const { showModal, setShowModal } = props;

  const portalElement = document.getElementById('overlays');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop showModal={showModal} setShowModal={setShowModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

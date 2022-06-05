import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'


const Modal = () => {
  const { showModal, modalHandler } = useGlobalContext();

  return (
    <div className={showModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={modalHandler}><FaTimes></FaTimes></button>
      </div>
    </div>
  );
}

export default Modal

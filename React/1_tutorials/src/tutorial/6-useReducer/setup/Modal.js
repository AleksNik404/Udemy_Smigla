import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 1500);

    return () => clearTimeout(timer);
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;

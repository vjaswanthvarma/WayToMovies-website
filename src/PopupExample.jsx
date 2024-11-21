import React, { useState } from 'react';
import Modal from 'react-modal';

// You can set the app element for accessibility purposes
Modal.setAppElement('#root');

const PopupExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button 
        className="flex text-4xl mt-2 ml-20 justify-between text-white hover:underline hover:bg-red-500 border rounded-lg border-none" 
        onClick={openModal}
      >
        <img src="usericon.jpeg" className="h-10 border rounded-md" alt="User Icon"/>
      </button>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Hello, I am a Modal</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default PopupExample;
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('portal');
const element = document.createElement('div');

export default function Modal({ children, isModalOpen }) {
  useEffect(function () {
    modalRoot.appendChild(element);

    return function cleanUp() {
      modalRoot.removeChild(element);
    }
  }, []);

  if (isModalOpen) {
    element.classList.add('modal-wrapper');
  } else {
    element.classList.remove('modal-wrapper');
  }

  return isModalOpen && createPortal(
    children,
    element,
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

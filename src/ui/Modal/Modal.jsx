import './Modal.scss'; 

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="close-btn" onClick={onClose}>
          &times;
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
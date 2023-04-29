import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalAlert = ({show, onHide, title, children}) => {
    return (
        <Modal
        show={show}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default ModalAlert;
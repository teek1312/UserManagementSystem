import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export default function ConfirmationModal({
        showModal=false,
        showModalTitle=true,
        showModalBody=true,
        showModalFooter=true,
        titleElements,
        bodyElements,
        footerElements,
        handleModalClose
    }) {

    const [show, setShow] = useState(showModal);
  
    const handleCloseAndSave = (e) => {
        setShow(false);
        handleModalClose(e)
    }
  
    return (
        <Modal show={show}>
            {showModalTitle && <Modal.Header >
                <Modal.Title>{titleElements.props.children}</Modal.Title>
            </Modal.Header>}
            {showModalBody && <Modal.Body>{bodyElements.props.children}</Modal.Body>}
            {showModalFooter && <Modal.Footer>
                {footerElements.props.children}
          </Modal.Footer>}
        </Modal>
    );
  }
  
//   render(<ConfirmationModal />);
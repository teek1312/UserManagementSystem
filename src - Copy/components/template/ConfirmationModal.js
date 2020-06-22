import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export default function ConfirmationModal({
        showModel=false,
        title,
        bodyText,
        buttonOneText,
        buttonTwoText,
        handleModalClose
    }) {

    const [show, setShow] = useState(showModel);
  
    const handleCloseAndSave = (e) => {
        setShow(false);
        handleModalClose(e)
    }
  
    return (
        <Modal show={show}>
            <Modal.Header >
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
                <Modal.Body>{bodyText}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={e => handleCloseAndSave(e)}>
                    {buttonOneText}
                </Button>
                <Button variant="primary" onClick={e => handleCloseAndSave(e)}>
                    {buttonTwoText}
                </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
//   render(<ConfirmationModal />);
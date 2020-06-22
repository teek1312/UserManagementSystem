import React, {useState} from 'react';
import BootStrapModal from 'react-bootstrap/Modal';

/* 
    Generic Modal devided into three parts
    1. Title
    2. Body
    3. Footer
    Parent component needs to passed these three element to render it on Modal
    showModal: initial value of Modal passed to show a modal,
    showModalTitle: Show modal title, if false no modal title is shown
    showModalBody: Show modal body, if false no modal body is shown
    showModalFooter: Show modal footer, if false no modal footer is shown
    showCloseButton: Show close button to top right of modal can be used to close dialog
    titleElements: title(JSX) to be rendered in title
    bodyElements: title(JSX) to be rendered in body
    footerElements: title(JSX) to be rendered in footer
    handleHideModal: parent function passed for hiding confirmation dialog
*/
export default function Modal({
        showModal=false,
        showModalTitle=true,
        showModalBody=true,
        showModalFooter=true,
        showCloseButton=false,
        titleElements,
        bodyElements,
        footerElements,
        handleHideModal
    }) {

    // using react hook setState to get updated value in show and handler as setShow
    const [show, setShow] = useState(() => showModal);
  
    // handling of close button on right top of the dialog
    const handleClose = () => {
        // settting local state as false
        setShow(false);
        // parent function for hiding confirmation dialog and changing state there
        handleHideModal();   
    }

    // Element header with/without close
    const getHeaderElement = () => {
        if (showCloseButton) {
            // Element header with close
            return (
                <BootStrapModal.Header closeButton>
                    <BootStrapModal.Title>{titleElements.props.children}</BootStrapModal.Title>
                </BootStrapModal.Header>
            )
        };
        // Element header without close
        return (
            <BootStrapModal.Header >
                <BootStrapModal.Title>{titleElements.props.children}</BootStrapModal.Title>
            </BootStrapModal.Header>
        );
    };
    return (
        <BootStrapModal show={show} onHide={handleClose}>
            {showModalTitle && getHeaderElement()}
            {showModalBody && <BootStrapModal.Body >
                {bodyElements} 
            </BootStrapModal.Body>}
            {showModalFooter && <BootStrapModal.Footer>
                {footerElements.props.children}
          </BootStrapModal.Footer>}
        </BootStrapModal>
    );
  }

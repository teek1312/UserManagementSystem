import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';

/*
    Showing confirmation Modal on delete on an entry
    showModal: prop to a show/hide a model,
    handleModalClose: parent function passed for handling close of delete confirmation dialog
    handleHideModal: parent function passed for hiding confirmation dialog
*/
export default function ConfirmationModal({
        showModal=false,
        handleModalClose,
        handleHideModal
    }) {
    
    // showModal prop decides to show a modal or not
    // setting initial value what is been recieved as a prop
    const [show, setShow] = useState(showModal);
  
    // clicking handling of yes/no on confirmation dialog while deleting an entry
    const handleCloseAndSave = (e) => {
        // hiding current modal
        setShow(false);
        // calling parent component method of decide further action
        handleModalClose(e)
    }
    // title component to be passed to generic dialog 
    const titleElements = (() => {return <>Confirmation</>})();
    // body component to be passed to generic dialog  
    const bodyElements = (() => {return <>Are you sure you want to delete</>})();
    // footer component to be passed to generic dialog  
    const footerElements = (() => {
        return (<>
            <Button variant="secondary" onClick={e => handleCloseAndSave(e)}>
                No
            </Button>
            <Button variant="primary" onClick={e => handleCloseAndSave(e)}>
                Yes
            </Button>
        </>);
    })();
    return (
        <Modal 
            showModal={showModal}
            handleHideModal={handleHideModal}
            titleElements={titleElements}
            bodyElements={bodyElements}
            footerElements={footerElements}
            handleModalClose={handleModalClose}
        />
    );
}

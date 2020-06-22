import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from './Modal';

// Initial form state to be set on every submit
const initialUserState = {
    name: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
  };

/* 
    Modal shwon where user clicks on add new user
    Parent component needs to passed these three element to render it on Modal
    showModal: initial value of Modal passed to show a modal
    addNewUser: function from parent component to add a new user
    handleHideModal: parent function passed for hiding confirmation dialog
*/
export default function RegisterUser({showModal, addNewUser, handleHideModal}) {
    // get and set user info using hook useState
    const [userInfo, setUserInfo] = useState(initialUserState);
    // get and set validated user info using hook useState
    // if valid set it true else false
    const [validated, setValidated] = useState(false);
    // on every change user info object to remain update in state
    const handleChange = event => {
        setUserInfo({
            ...userInfo,
            [event.target.id]: [event.target.value]
        });
    };
    // on click of submit, invoke parent method of addNewUser if validated true
    const handleSubmit = event => {
        // story book another option that can be used
        const form = event.currentTarget;
        // validating form value, true if valid else false
        // to improve as it only shows one error at a time
        if (form.checkValidity() === false) {
            // prevent event bubbling
            event.preventDefault();
            event.stopPropagation();
        } else {
            // setting user info valid value true
            setValidated(true);
            // parent function to add new user
            addNewUser(userInfo);
            // setting initial value once user is added
            setUserInfo(initialUserState);
        }
    }
    // Title to be rendered in generic dialog
    const titleElements = (() => {return <>Add New User</>})();
    // Body element to be rendered in generic dialog
    // form designed as suggested in react bootstrap
    // handle submit to be triggered on form submit
    // handle change to be triggered on every change
    const bodyElements =
         
        <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Row onChange={handleChange} >
            <Form.Group as={Col} controlId="name">
                <Form.Label >Name</Form.Label>
                <Form.Control 
                    required
                    type="text"
                    placeholder="Enter name" 
                />
                <Form.Control.Feedback type="invalid">
                    Please enter name.
                </Form.Control.Feedback>
            </Form.Group>
        
            <Form.Group as={Col} controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    placeholder="Age"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please enter name.
                </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>
        
            <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control 
                    onChange={handleChange}
                    placeholder="1234 Main St"
                    required
                />
            </Form.Group>
        
            <Form.Row onChange={handleChange}>
                <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        placeholder="City"
                        required
                    />
                </Form.Group>
            
                <Form.Group as={Col} controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control 
                        placeholder="State"
                        required
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row onChange={handleChange}>
                <Form.Group as={Col} controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control 
                        placeholder="Country"
                        required
                    />
                </Form.Group>
            
                <Form.Group as={Col} controlId="pincode">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                        placeholder="Zip"
                        required
                    />
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>;

    return (
        <Modal 
            showModal={showModal}
            handleHideModal={handleHideModal}
            showCloseButton={true}
            showModalFooter={false}
            titleElements={titleElements}
            bodyElements={bodyElements}
        />
    );
}
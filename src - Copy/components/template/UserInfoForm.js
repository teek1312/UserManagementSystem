import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const initialUserState = {
    name: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
  };

export default function RegisterUser({addNewUser}) {
    const [userInfo, setUserInfo] = useState(initialUserState);
    const [validated, setValidated] = useState(false);
    // const []
    const handleChange = event => {
        setUserInfo({
            ...userInfo,
            [event.target.id]: [event.target.value]
        });
    };
    const handleSubmit = event => {
        // form validation can be put here instead of using formik & Yup
        // but at project level it makes process simple
        // story book another option that can be used
        // event.preventDefault(); // to read
        const form = event.currentTarget;
        // validating form value
        // to improve as it only shows one error at a time
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setValidated(true);
            addNewUser(userInfo);
            setUserInfo(initialUserState);
        }
    }

    return (
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}
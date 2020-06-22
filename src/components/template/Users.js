import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../Application/App.css';

/*
    Capabilty of Showing user's grid, adding new user and delete user record loaded from redux store
    users: Prop recieving a list a users
    showConfirmationDialog: showing delete confirmation modal when user tries to delete a row
    showAddUserModal: show add user modal when user wants to add a new user
*/
export default function Users({users, showConfirmationDialog, showAddUserModal}) {
    if (users.length === 0) {
        return null;
    }
    // creating header columns of table/grid
    const userTableHeader = (users) => {
        // mapping attribute of a record. Record will be sync to taking '0' of records
        return Object.keys(users[0]).map(userAttribute => {
                // don't show id attricute
                if (userAttribute === 'id') {
                    return null;
                }
                // render column header and add blank column for delete link
                return (
                    <Col className="col" key={userAttribute} lg={true}>
                        {userAttribute}
                    </Col>)
        }).concat(<Col className="col-no-border" />);
    }

    return (
        <Container fuild="lg">
            <Row>
                <Button variant="outline-primary" onClick={() => showAddUserModal()}>Add New User</Button>{' '}
            </Row>
            <Row>
                <Col lg={true} >
                    <Row>
                        {userTableHeader(users)}
                    </Row>
                    {/* mapping every user record */}
                    {users.map(user => {
                        return (
                            <Row key={user.id}>
                                {Object.values(user).map(attValue => {
                                    // no need to show user id value
                                    if (user.id === attValue) {
                                        return null;
                                    }
                                    return (
                                        <Col className="col" key={`${user.id}${attValue}`}>{attValue}</Col>
                                    )
                                })}
                                <Col className="col-no-border" >
                                    <Button variant="link" onClick={() => showConfirmationDialog(user.id)}>Delete</Button>{' '}
                                </Col>
                            </Row>
                        )
                    })}
                </Col>
                
            </Row>
        </Container>
    );

}
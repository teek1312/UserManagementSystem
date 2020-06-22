import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Users({users, showConfirmationDialog, addNewUser, showAddUserModal}) {
    if (users.length === 0) {
        return null;
    }
    const userTableHeader = (users) => {
        return Object.keys(users[0]).map(userAttribute => {
                if (userAttribute === 'id') {
                    return null;
                }
                return (
                    <Col key={userAttribute}>
                        {userAttribute}
                    </Col>)
        })
    }

    return (
        <Container fuild="md">
            <Row>
                {userTableHeader(users)}
            </Row>
            {users.map(user => {
                return (
                    <Row key={user.id}>
                        {Object.values(user).map(attValue => {
                            if (user.id === attValue) {
                                return null;
                            }
                            return (
                                <Col key={`${user.id}${attValue}`}>{attValue}</Col>
                            )
                        })}
                        <Button variant="outline-danger" onClick={() => showConfirmationDialog(user.id)}>Delete</Button>{' '}
                    </Row>
                )
            })}
            <Row>
                <Button variant="outline-primary" onClick={() => showAddUserModal()}>Add New User</Button>{' '}
            </Row>
        </Container>
    );

}
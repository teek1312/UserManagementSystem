import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Users from './Users';
import Col from 'react-bootstrap/Col';

configure({adapter: new Adapter()});

describe('Testing Modal', () => {
    it('Loading only bootstrap modal without any element', () => {
        const usersProps = {
            users: [{
                "id": 1,
                "name": "Prateek",
                "age": 32,
                "address": "Hadapsar",
                "city": "Pune",
                "state": "Maharashtra",
                "pincode": "411028",
                "country": "India"
            }]
        };
        const wrapper = shallow(<Users {...usersProps} />);
        const nameCol =  <Col className="col">Prateek</Col>;
        // console.log(nameCol.debug());
        expect(wrapper.find(nameCol)).toHaveLength(1);
    })
})
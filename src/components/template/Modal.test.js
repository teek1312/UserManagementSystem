import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Modal from './Modal';
import BootStrapModal from 'react-bootstrap/Modal';

configure({adapter: new Adapter()});

describe('Testing Modal', () => {
    it('Loading only bootstrap modal without any element', () => {
        const modalProps = {
            showModal: false,
            showModalTitle: false,
            showModalBody: false,
            showModalFooter: false,
            showCloseButton: false,
            handleHideModal: () => {}
        };
        const wrapper = shallow(<Modal {...modalProps} />);
        expect(wrapper.find(BootStrapModal)).toHaveLength(1);
    })
})
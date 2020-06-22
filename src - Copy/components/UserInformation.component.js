import React, {Component} from  'react';
import UserInfoForm from './template/UserInfoForm';
import Users from './template/Users';
import ConfirmationModal from './template/ConfirmationModal';
import Modal from './template/Modal';

// change it to pure component
class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state= {showConfirmationModal: false, showAddUserModal: false};
        this.addNewUser = this.addNewUser.bind(this);
        this.showConfirmationDialog = this.showConfirmationDialog.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.showAddUserModal = this.showAddUserModal.bind(this);
        this.modalRef = React.createRef();
    }
    addNewUser(userInfo) {
        const {addUser} = this.props;
        // generate id
        userInfo.id =  this.props.users.length + 1;
        addUser(userInfo);
        this.setState({showAddUserModal: false});
    }
    showConfirmationDialog(id) {
        this.setState({showConfirmationModal: true});
        // saved as temp variable not required to set it state as modal will perform either 
        // yes or no on which it is been cleared
        this.modalRef = id;
    }

    handleModalClose(event) {
        if (event && event.target && event.target.innerText === 'Yes') {
            const {deleteUser} = this.props;
            // deleting existing user from redux store
            deleteUser(this.modalRef);
        } else {
            event.stopPropagation();
        }
        // parent compoennt to know manage correct state
        this.setState({showConfirmationModal: false});
        // clearing value saved on opening of modal
        this.modalRef = undefined;
    }
    showAddUserModal() {
        this.setState({showAddUserModal: true});
    }
    render() {
        const {users} = this.props; 
        // move to i18n
        return (
        <>
            <Users 
                users={users} 
                addNewUser={this.addNewUser}
                showConfirmationDialog={this.showConfirmationDialog}
                showAddUserModal={this.showAddUserModal}
            />
            {/* this.state.showConfirmationModal && <ConfirmationModal 
                showModel={this.state.showConfirmationModal}
                title='Confirmation'
                bodyText='Are you sure you want to delete'
                buttonOneText='No'
                buttonTwoText='Yes'
                handleModalClose={this.handleModalClose}
            /> */}
             {this.state.showConfirmationModal && <Modal 
                showModal={this.state.showConfirmationModal}
                titleElements={<>Confirmation</>}
                bodyElements={<>Are you sure you want to delete</>}
                footerElements={<>Confirmation</>}
                handleModalClose={this.handleModalClose}
            />}
            {this.state.showAddUserModal && <UserInfoForm 
                addNewUser={this.addNewUser}
            />}
        </>
        );
    }
}

export default UserInformation;
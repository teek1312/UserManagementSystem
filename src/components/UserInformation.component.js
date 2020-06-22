import React, {Component, PureComponent} from  'react';
import UserInfoForm from './template/UserInfoForm';
import Users from './template/Users';
import ConfirmationModal from './template/ConfirmationModal';

// change it to pure component
class UserInformation extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {showConfirmationModal: false, showAddUserModal: false};
        this.addNewUser = this.addNewUser.bind(this);
        this.showConfirmationDialog = this.showConfirmationDialog.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.showAddUserModal = this.showAddUserModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
        this.modalRef = React.createRef();
    }
    /* 
        Adding a new user record in redux store
        userInfo: user info object to be persisted 
    */
    addNewUser(userInfo) {
        const {addUser} = this.props;
        // generate id and add it to current recore
        userInfo.id =  this.props.users.length + 1;
        // add a new user in store
        addUser(userInfo);
        // hide the current add user modal
        this.setState({showAddUserModal: false});
    }
    /*
        Generic modal handler to hide modal
    */
    handleHideModal() {
        // set state to false to rerender its child element modal
        this.setState({showConfirmationModal: false, showAddUserModal: false});
    }
    /*
        Show confirmation modal and store selected id in current instance
        id: user id currently selected store. No need to maintain it in local state
    */
    showConfirmationDialog(id) {
        // show confirmation modal
        this.setState({showConfirmationModal: true});
        // saved as temp variable not required to set it state as modal will perform either 
        // yes or no on which it is been cleared
        this.modalRef = id;
    }
    
    /*
        Handling delete of a user record
        event: event object recieved on click
    */
    handleModalClose(event) {
        // If yes, is clicked removed, delete existing record
        if (event && event.target && event.target.innerText === 'Yes') {
            const {deleteUser} = this.props;
            // deleting existing user from redux store
            deleteUser(this.modalRef);
        } else {
            // If no is clicked, stop bubbling of event
            event.preventDefault();
            event.stopPropagation();
        }
        // parent compoennt to know manage correct state
        this.setState({showConfirmationModal: false});
        // clearing value saved on opening of modal
        this.modalRef = undefined;
    }

    /*
        Show add new user modal
    */
    showAddUserModal() {
        this.setState({showAddUserModal: true});
    }
    render() {
        const {users} = this.props; 
        return (
        <>
            <Users 
                users={users} 
                addNewUser={this.addNewUser}
                showConfirmationDialog={this.showConfirmationDialog}
                showAddUserModal={this.showAddUserModal}
            />
            {this.state.showConfirmationModal && <ConfirmationModal 
                showModal={this.state.showConfirmationModal}
                handleHideModal={this.handleHideModal}
                handleModalClose={this.handleModalClose}
            />}
            {this.state.showAddUserModal && <UserInfoForm
                showModal={this.state.showAddUserModal}
                handleHideModal={this.handleHideModal}
                addNewUser={this.addNewUser}
            />}
        </>
        );
    }
}

export default UserInformation;
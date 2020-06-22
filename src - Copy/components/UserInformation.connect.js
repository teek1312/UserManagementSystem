import { connect } from 'react-redux'
import UserInformation from './UserInformation.component';
import {UserActions} from '../Actions';

const mapStateToProps = state => {
    const {users} = state;
    return {
        users
    }
};

const mapDispatchToProps = dispatch => {
    const {addUser, deleteUser} = UserActions;
    return {
        addUser: user => dispatch(addUser(user)),
        deleteUser: id => dispatch(deleteUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);

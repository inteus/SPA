import { connect } from 'react-redux';
import Friends from './friends';

let mapStateToProps = (state) => {
    return {
        friends: state.friendsList.friends
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, isButtonProgress, getUsersThunkCreator, followUserThunkCreator, unfollowUserThunkCreator } from '../../redux/users-reducer';
import Users from './users';
import Preloader from '../common/preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsersThunkCreator(pageNum, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isButtonProgress={this.props.isButtonProgress}
                buttonInProgress={this.props.buttonInProgress}
                followUserThunkCreator={this.props.followUserThunkCreator}
                unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
                pagesBlockSize={5}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    const { users, pageSize, totalUsersCount, currentPage, isFetching, buttonInProgress } = state.usersList
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        buttonInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        isButtonProgress,
        getUsersThunkCreator,
        followUserThunkCreator,
        unfollowUserThunkCreator
    })(UsersContainer);
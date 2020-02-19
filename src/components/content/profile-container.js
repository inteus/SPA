import React from 'react';
import Content from './content';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/content-reducer'
import { withRedirect } from '../login/auth-redirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let USER_ID = this.props.match.params.userId;
        if (!USER_ID) {
            USER_ID = 5545;
        }
        this.props.getProfileThunkCreator(USER_ID);
        this.props.getStatusThunkCreator(USER_ID)
    }

    render() {
        return (
            <div>
                <Content
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatusThunkCreator={this.props.updateStatusThunkCreator}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.contentPage.profile,
        status: state.contentPage.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
    withRouter,
    withRedirect
)(ProfileContainer);
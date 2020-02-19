import React from 'react';
import { updateMessageBodyCreator, sendMessageCreator } from '../../redux/dialogues-reducer';
import Dialogues from './dialogues';
import { connect } from 'react-redux';
import { withRedirect } from '../login/auth-redirect';
import { compose } from 'redux';

class DialoguesContainer extends React.Component {

    render() {
        return (
            <div>
                <Dialogues {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (bodyText) => {
            dispatch(updateMessageBodyCreator(bodyText))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRedirect)(DialoguesContainer);
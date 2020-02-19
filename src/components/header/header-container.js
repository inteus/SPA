import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { authThunkCreator } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.authThunkCreator(this.props.id, this.props.email, this.props.login)
    }

    render() {

        return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => ({

    isLogged: state.userAuth.isLogged,
    login: state.userAuth.login,

})

export default connect(mapStateToProps, { authThunkCreator })(HeaderContainer);
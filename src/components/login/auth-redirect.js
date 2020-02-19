import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        isLogged: state.userAuth.isLogged
    }
}

export const withRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogged) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }
    let redurectWeapper = connect(mapStateToProps)(RedirectComponent);

    return redurectWeapper;
}
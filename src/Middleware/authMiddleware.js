import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }};
export const AuthMiddleware = (Component) => {

    class AuthRedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/beta'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
    return ConnectedAuthRedirectComponent;
}

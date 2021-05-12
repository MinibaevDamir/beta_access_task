import {connect} from 'react-redux';
import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {login, setCode} from "../Redux/authReducer";
import BetaAccessPage from "../Components/betaPage";


let mapStateToProps = (state) => (
     {
         isAuth: state.auth.isAuth,
    });
const BetaAccessContainer = compose(withRouter,
    connect(mapStateToProps, {login}))(BetaAccessPage);
export default BetaAccessContainer;
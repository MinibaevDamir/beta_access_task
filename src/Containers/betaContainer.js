import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import BetaAccessPage from "../Components/betaPage";
import {login} from "../Actions/authActions";


let mapStateToProps = (state) => (
     {
         isAuth: state.auth.isAuth,
         fetching: state.auth.fetching,
         error: state.auth.error
    });
const BetaAccessContainer = compose(withRouter,
    connect(mapStateToProps, {login}))(BetaAccessPage);
export default BetaAccessContainer;
import {withRouter} from "react-router-dom";
import SitePage from "../Components/sitePage";
import {AuthMiddleware} from "../Middleware/authMiddleware";
import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "../Actions/authActions";

let mapStateToProps = (state) => ({});

const SiteContainer = compose(withRouter, AuthMiddleware, connect(mapStateToProps, {logout}))(SitePage);
export default SiteContainer;
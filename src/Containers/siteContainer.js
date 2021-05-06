import React from "react";
import {withRouter} from "react-router-dom";
import SitePage from "../Components/sitePage";
import {AuthMiddleware} from "../Middleware/authMiddleware";
import {compose} from "redux";



const SiteContainer = compose(withRouter, AuthMiddleware)(SitePage);
export default SiteContainer;
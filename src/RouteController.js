import {Route} from "react-router-dom";
import BetaAccessPage from "./Components/betaPage";
import React from "react";
import SiteContainer from "./Containers/siteContainer";
import BetaAccessContainer from "./Containers/betaContainer";

const RouteController = props => {
    return (
        <div>
            <Route path={'/beta'} render={() => <BetaAccessContainer/>}/>
            <Route path={'/'} render={() => <SiteContainer/>}/>
        </div>
    )
}

export default RouteController;
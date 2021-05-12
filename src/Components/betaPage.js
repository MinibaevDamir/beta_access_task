import '../App.css';
import React from "react";
import {Redirect, useHistory} from "react-router-dom";
import SecretReduxForm from "../Forms/codeForm";




const BetaAccessPage = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.secretCode)
    }
    if(props.isAuth){
        return <Redirect to={'./'}/>
    }
    else {
        return (
            <div className="App">
                <div className="App-header">
                    <p>Site is not avaliable now. Coming soon.</p>
                    <p>Come back here in future!</p>
                    <SecretReduxForm onSubmit={onSubmit}/>
                    <div className= "error">
                    {!props.fetching && props.error}
                    </div>
                </div>
            </div>
        );
    }
}

export default BetaAccessPage;
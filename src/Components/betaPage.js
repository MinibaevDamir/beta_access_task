import '../App.css';
import React from "react";
import {Redirect, useHistory} from "react-router-dom";
import SecretReduxForm from "../Forms/codeForm";




const BetaAccessPage = (props) => {
    const history = useHistory();
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
                </div>
            </div>
        );
    }
}

export default BetaAccessPage;
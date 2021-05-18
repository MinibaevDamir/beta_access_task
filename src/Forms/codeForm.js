import {Field, reduxForm} from "redux-form";
import React from "react";

const secretForm = (props) => {
    const {error, submitting} = props
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-group mb-3">
                <Field placeholder={"Secret code"} name={"secretCode"}
                       component="input" type="password" className={error ? "form-control is-invalid" : "form-control"}
                       required/>
                <button className="btn btn-outline-secondary button_form" disabled={submitting}>Send code</button>
                <div className={error ? "invalid-tooltip" : "hidden"} >
                    {error}
                </div>
            </div>
        </form>
    )
}

const SecretReduxForm = reduxForm({
    form: 'secret'
})(secretForm)

export default SecretReduxForm
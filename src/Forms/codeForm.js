import {Field, reduxForm} from "redux-form";
import React from "react";

const secretForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-group mb-3">
                <Field placeholder={"Secret code"} name={"secretCode"}
                       component="Input" type = "password" className="form-control" />
                <button className="btn btn-outline-secondary button">Send code</button>
            </div>
        </form>
    )
}
const SecretReduxForm = reduxForm({
    form: 'secret'
})(secretForm)

export default SecretReduxForm
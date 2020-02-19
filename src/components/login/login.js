import React from 'react';
import { reduxForm, Field } from 'redux-form';

const Login = (props) => {
    const { handleSubmit } = props

    return (
        <div>
            <h2>Login:</h2>
            <form onSubmit={ handleSubmit((formData) =>
                console.log(formData)
            )}>
                <div>
                    <Field component='input' name='login' placeholder='Login' />
                </div>
                <div>
                    <Field component='input' name='password' placeholder='Password' />
                </div>
                <div>
                    <Field component='input' type='checkbox' name='rememberMe' /> remember me
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'login'
})(Login);
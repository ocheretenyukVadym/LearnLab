import { observer } from 'mobx-react';
import React, { useState } from 'react'
import store from '../../Store/store';
import './Login.css';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);

    const handleSubmit = (event) => {
        if (store.autorizatedUser(email, password)) props.history.push('/home');
        event.preventDefault();
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your login and password
                </label>
                <input name='email' type='email' placeholder='E-mail' value={email} 
                        onChange={handleChangeEmail} />

                <input name='password' type='password' placeholder='Password' value={password} 
                        onChange={handleChangePassword} />
                        
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default observer(Login);
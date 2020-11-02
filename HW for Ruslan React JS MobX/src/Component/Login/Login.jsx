import { inject, observer } from 'mobx-react';
import React, { useState } from 'react'
import './Login.css';

const Login = ({store, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCorrectData, setIsCorrectData] = useState(true);

    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);

    const handleSubmit = (event) => {
        if (store.autorizatedUser(email, password)){
            history.push('/home');
            setIsCorrectData(true);
        }
        else setIsCorrectData(false);
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
                {!isCorrectData && <label className='uncorrect'>Uncorrect password or email</label>}
            </form>

        </div>
    )
}

export default inject('store')(observer(Login));
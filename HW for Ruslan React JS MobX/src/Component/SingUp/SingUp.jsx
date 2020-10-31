import { observer } from 'mobx-react';
import React, { useState } from 'react'
import store from '../../Store/store';
import './SingUp.css';

const SingUp = (props) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [touched, setTouched] = useState(false);
    const [isCorrectData, setIsCorrectData] = useState(true);

    const handleChangeName = event => setUserName(event.target.value);
    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);
    const handleChangeRepeatPassword = event => {setRepeatPassword(event.target.value); setTouched(true)};

    const handleSubmit = (event) => {
        if(password === repeatPassword){
            setIsCorrectData(true)
            store.createNewUser(userName, email, password); 
            props.history.push('/login');
        }
        else setIsCorrectData(false);
        event.preventDefault();
    }

    return (
        <div className="singup-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Type login and password
                </label>
                <input name='userName' type='text' value={userName} placeholder='Your name' 
                        onChange={handleChangeName} />

                <input name='email' type='email' value={email} placeholder='E-mail' 
                        onChange={handleChangeEmail} />

                <input name='password' type='password' value={password} placeholder='Password' 
                        onChange={handleChangePassword} />
                <input name='passwordRepeat' type='password' value={repeatPassword} 
                        placeholder='Repeat password' onChange={handleChangeRepeatPassword} 
                        className={touched && password !== repeatPassword ? 'notEquals' : ''} />
                        
                <input type="submit" value="Send" />

                {!isCorrectData && <label className='uncorrect'>Not equals passwords</label>}

            </form>
        </div>
    )
}

export default observer(SingUp);
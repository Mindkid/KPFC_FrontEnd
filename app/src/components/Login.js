import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setIsLogin }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({
            username,
            password
        });

        setIsLogin(true);
    }

    return (
        <div className="login">
            <header >
                <div>
                    <h1>Welcome</h1>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <div className='userInfo'>
                            <label for="userEmail">Email: </label>
                            <input type="email" name="userEmail" placehoholder="Enter Email" onChange={e => setUserName(e.target.value)} required />
                            <br />
                            <label for="userPassword">Password: </label>
                            <input type="password" name="userPassword" placehoholder="Enter Password" onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <br />
                        <button className="loginButton" type="submit" >Login</button>
                    </form>

                </div>
            </header>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
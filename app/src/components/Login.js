import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

}

export default function Login({ setIsLogin }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [ error, setError] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({
            email,
            password
        }).then(async response => {
            if (!response.ok) {
                // get error message from body or default to response status
                const error = response.status;
                return Promise.reject(error);
            }

            setIsLogin(true)
        })
        .catch(error => {
            setError("Wrong email or password.")
        });
    }


    return (
        <div className="login">
            <header >
                <div>
                    <h1>Welcome</h1>
                    <Form className='loginForm' onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="userEmail">Email: </label>
                            <div className='userSearchButtonContainer'>
                                <input type="email" className='form-control' name="userEmail" placehoholder="Enter Email" onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <br/>
                            <label for="userPassword">Password: </label>
                            <div className='userSearchButtonContainer'>
                                <input type="password" className='form-control' name="userPassword" placehoholder="Enter Password" onChange={e => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <br />
                        <Button className="loginButton" type="submit" >Login</Button>
                    </Form>
                    <div className='error'>
                        <p >{error}</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
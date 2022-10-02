import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Button } from "react-bootstrap";
import User from './User';


async function retireveUsers({ email }) {
    var url = "http://localhost:8080/users?" + new URLSearchParams({ email })
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
}

export default function Users() {
    const [email, setEmail] = useState()
    const [users, setUsers] = useState([])

    const handleSubmit = async e => {
        e.preventDefault();
        setUsers(await retireveUsers({
            email
        }));
    }

    return (
        <div className='postMural'>
            <Form className='loginForm' onSubmit={handleSubmit}>
                <div class="form-group">                    
                    <label  for="userEmail">Email to search:  </label>
                    <div className='userSearchButtonContainer'>
                        <input className='form-control' type="email" name="userEmail" placehoholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <Button type='submit'>Search</Button>
                </div>
            </Form>
            <Accordion >
                {users.map((user, index) => (
                    <User user={user} id={index} />
                ))}
            </Accordion>
        </div>
    );
}
import React, { useState } from 'react';


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

    const handleOnClick = async e => {
        setUsers(await retireveUsers({
            email
        }));
    }

    return (
        <div>
            <label for="userEmail">Email to search: </label>
            <input type="email" name="userEmail" placehoholder="Enter Email" onChange={e => setEmail(e.target.value)} />
            <div className='userSearchButtonContainer'>
                <button onClick={handleOnClick}>Search</button>
            </div>

        </div>
    );
}
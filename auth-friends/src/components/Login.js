import React, { useState } from 'react';
import axios from 'axios';

function Login (props) {
    const [credentials, setCredentials] = useState ({
        username: 'Lambda School',
        password: 'i<3Lambd4'
    })
    const handleChange = (e) => {
        return setCredentials ({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    const routeToFriends = () => {
        props.history.push('/secretfriends')
    }
    const login = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/api/login`, { username: 'Lambda School', password: 'i<3Lambd4' })
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                routeToFriends()
                props.setLoggedIn(true)
            })
            .catch(err => console.log("Error spotted!", err.response))
    }

    return (
        <form onSubmit={login}>
            <div>
                <label htmlFor="username">Enter username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange} />
            </div>
            
            <div>
                <label htmlFor="password">Enter password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange} />
            </div>
            
            <button type="submit">Submit!</button>
        </form>
    )
}

export default Login;
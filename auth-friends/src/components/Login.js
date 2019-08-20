import React, { useState } from 'react';

function Login () {
    const [credentials, setCredentials] = useState ({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        return setCredentials ({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <label htmlFor="username">Enter username</label>
            <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange} />

            <label htmlFor="password">Enter password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange} />
        </form>
    )
}

export default Login;
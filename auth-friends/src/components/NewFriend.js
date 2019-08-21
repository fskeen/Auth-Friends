import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

function NewFriend ({ setFriends }) {
    const [newFriend, setNewFriend] = useState ({
        name: '',
        age: '',
        email: ''
    })
    const handleChange = (e) => {
        return setNewFriend ({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    }
    const postData = (e) => {
        e.preventDefault();
        if (newFriend.name && newFriend.age && newFriend.email) {
            axiosWithAuth()
            .post(`http://localhost:5000/api/friends`, newFriend)
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => console.log("Error spotted!", err.response))
        } else {
            return alert("All fields must be filled out before you submit.")
        }
    }

    return (
        <form onSubmit={postData}>
            <div>
                <label htmlFor="name">Enter friend name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange} />
            </div>
            
            <div>
                <label htmlFor="age">Enter friend age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange} />
            </div>
            
            <div>
                <label htmlFor="password">Enter friend email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange} />
            </div>
            
            <button type="submit">Submit!</button>
        </form>
    )
}

export default NewFriend;
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

function Friends () {
    const [friends, setFriends] = useState([])

    useEffect (() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <p>Friendly friend list</p>
            <ul>
                {friends.map(friend => {
                    return (
                        <li key={Date.now + friend.name}>
                            <h4>{friend.name}</h4>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </li>
                        
                    )
                })}
            </ul>
            
        </div>
        
    )
}

export default Friends;
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

import NewFriend from './NewFriend';

function Friends () {
    const [friends, setFriends] = useState([])

    useEffect (() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }, [friends.length])

    return (
        <div>
            <p>Friendly friend list</p>
            <NewFriend setFriends={setFriends}/>
            <ul>
                {friends.map(friend => {
                    return (
                        <li key={Math.random()}>
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
import React, {useState, useEffect} from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    const getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data)
        })
        .catch(err => console.log('Error Fetching Friends', err))
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = f => {
        axiosWithAuth()
        .delete(`/api/friends/${f.id}`)
        .then(res =>{
            console.log(f.name, 'Deleted', res);
            setFriends(res.data)
        })
        .catch(err => console.log('Error in deleting', err))
    }

    return (friends.length === 0)
        ? <h2 className='loading-text'>...Loading</h2>
        : (
            <div className='friends-container'>
                <h2 className='friends-title'>My Friends</h2>
                <div className='friends-grid'>
                    {friends.map(f => {
                        return (
                            <div className='friend' key={f.id}>
                                <h3 className='friend-name'> {f.name} </h3>
                                <p className='friend-info'>Age: {f.age} </p>
                                <p className='friend-info'>Email: {f.email} </p>
                                <button onClick={e => {
                                    e.preventDefault();
                                    handleDelete(f)
                                }}>Delete</button>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )

}

export default FriendsList
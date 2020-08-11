import React, {useState} from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriend = props => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const [isAdding, setIsAdding] = useState(false)

    const handleChanges = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = e => {
        e.preventDefault();
        setIsAdding(true);
        axiosWithAuth().post('/api/friends', friend)
        .then(res => {
            console.log(res);
            props.history.push('/friends')
        })
    }

    return isAdding
        ? <h2 className='loading-text'>...Adding {friend.name}</h2>
        : (
            <form className='add-form'>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' name='name' value={friend.name} onChange={handleChanges} />

                <label htmlFor='age'>Age: </label>
                <input type='text' id='age' name='age' value={friend.age} onChange={handleChanges} />

                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' name='email' value={friend.email} onChange={handleChanges} />

                <button onClick={handleAdd}>Add Friend</button>
            </form>
        )
}

export default AddFriend;
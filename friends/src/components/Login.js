import React, {useState} from 'react'
import axios from 'axios'

const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        setIsLoading(true)
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            window.localStorage.setItem('token', JSON.stringify(res.data.payload))
            setIsLoading(false)
            if(res.status === 200) {
                props.history.push('/friends')
            }
        })
        .catch(err => console.log('Error Logging In', err))
    }

    return isLoading 
        ? <h2 className='loading-text'>...Loading</h2>
        : (
            <form className='login-form'>
                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' name='username' value={credentials.username} onChange={handleChange} />

                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' name='password' value={credentials.password} onChange={handleChange} />

                <button onClick={handleLogin}>Log In</button>
            </form>
        )
}

export default Login;
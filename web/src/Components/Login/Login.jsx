import axios from 'axios';
import { useState } from 'react';

function Login(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserName = (e) =>{
        setUserName(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }  

    const handleSubmit = (e) =>{
        e.preventDefault()
            axios.post('/api/Portfolio/Login', {username, password})
            .then(response => {
                console.log(response)
            }
            )  
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label >User Name:</label>
                    <input value={username} onChange={handleUserName}></input>
                    <label>Password:</label>
                    <input value={password} onChange={handlePassword}></input>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        </>
    )
}

export default Login;
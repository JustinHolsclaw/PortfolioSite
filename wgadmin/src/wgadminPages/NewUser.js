import { useState } from 'react';
import axios from 'axios';
function NewUser() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const formValid = (
        username.trim().length > 5 &&
        password.trim().length >= 8 &&
        password.trim() === rePassword.trim()
    )

    const handleUserName = (e) =>{
        setUserName(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }  

    const handleRePassword = (e) =>{
        setRePassword(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(formValid){
            axios.post('https://wgadmin.justinholsclaw.com/api/Portfolio/createUser', {username, password, rePassword})
            .then(response => {
                console.log(response)
            }
            )  
        }
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label >User Name:</label>
                    <input value={username} onChange={handleUserName}></input>
                    <label>Password:</label>
                    <input value={password} onChange={handlePassword}></input>
                    <label>Retype Password:</label>
                    <input value={rePassword} onChange={handleRePassword}></input>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        </>
    )
}

export default NewUser;
import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(200);

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
                setStatus(response.status)
            }
            )  
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label >User Name:</label>
                    <input value={username} onChange={handleUserName}></input><br/>
                    <label>Password:</label>
                    <input value={password} onChange={handlePassword}></input><br/>
                    <button type='submit'>Submit</button>
                </form>
                {   () =>{
                    if(status == 400){
                    alert(" username or password")
                    }
                    else{
                        return <Redirect target="/Secure"/>
                    }
                    }   
                }
            </div>
        </>
    )
}

export default Login;
import axios from 'axios';
import { useState } from 'react';
import { Redirect, useNavigate} from 'react-router-dom';

function Login(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(200);
    const navigate = useNavigate();

    const handleUserName = (e) =>{
        setUserName(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }  

    const handleSubmit = (e) =>{
        e.preventDefault()
            axios.post('/api/Portfolio/Login', {username, password})
            .then(r => {
                console.log(r)
                if(r.response?.status == 200){
                    navigate("/Secure")
                }
            }
            )
            .catch(
                err => {
                    console.error(err)
                    alert("incorrect username or password")
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
            </div>
        </>
    )
}

export default Login;
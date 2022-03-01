import { useEffect, useState } from "react";
import axios, {AxiosResponse, AxiosError} from "react";
import {useNavigate} from 'react-router-dom';
function Secure() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    useEffect(() => {
        axios.get('/api/Portfolio/secure', {withCredentials: true}).then(
            r => {
                setUsername(r.data)
            }
        )
            .catch((err)=>
                {
                    if(err.response?.status === 403){
                        if(err.response?.headers.location){
                            navigate(err.response.headers.location)
                        }
                    }

                })

    })
    const logoutHandler = () => {
        axios.delete('/api/Portfolio/secure', {withCredentials: true}).then(
            r => navigate(r.headers.location)
        )
    }

    return (
        <>
            <h2>welcome {username}</h2>
            <button onClick={logoutHandler}>Logout</button>
        </>
    )
}

export default Secure;
import { useEffect, useState } from "react";
import axions, {AxiosResponse, AxiosError} from "react";
function Secure() {
    const [username, setUsername] = useState('')
    useEffect(() => {
        axios.get('/api/Portfolio/secure').then(
            r => {
                setUsername(r.data)
            }
        )
            .catch((err)=>
                {
                    if(err.response?.status === 403){
                        if(err.response?.headers.location){
                            
                        }
                    }

                })

    })


    return (
        <>
            <h2>welcome {username}</h2>
            <button href="/logout">Logout</button>
        </>
    )
}

export default Secure;
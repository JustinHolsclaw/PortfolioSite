

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
        if(formValid){
            axios.post('https://wgadmin.justinholsclaw.com/api/Portfolio/Login', {username, password})
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
                    <button type='submit'>Submit</button>
                </form>

            </div>
        </>
    )
}
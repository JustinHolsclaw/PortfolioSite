import { useState } from "react";
import { axios } from "axios";

function AdminHome() {
    
    const axios = require('axios').default;

    function restartService() {
        axios.get('https://wgadmin.justinholsclaw.com/api/Portfolio/restart')
        .then(response => {
            console.log(response.data)
            // if(response.status === 200){
            //     setStatus("Wire Guard is Restarting");
            // }
            // else{
            //     setStatus("An error has prevented Wire Guard from Restarting");
            // }
        }
        )
    }

    const [status, setStatus] = useState('Wire Guard is Running');
    const [clientName, setClientName] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [dateAdded, setDateAdded] = useState('');
    const [allowedIpRange, setAllowdIpRange] = useState('');
    const [clientPublicKey, setClientPublicKey] = useState('')
    const [clientPrivateKey, setClientPrivateKey] = useState('')
    const handleAdminFormSubmit = () => {

    };

    const handleClientNameChange = event => {
        setClientName(event.target.value)
    }
    const handleIpAddressChange = event => {
        setIpAddress(event.target.value)
    }
    const handleDateAddedChange = event => {
        setDateAdded(event.target.value)
    }
    const handleAllowedIpRangeChange = event => {
        setAllowdIpRange(event.target.value)
    }
    const handleClientPublicKeyChange = event => {
        setClientPublicKey(event.target.value)
    }
    const handleClientPrivateKeyChange = event => {
        setClientPrivateKey(event.target.value)
    }

    return (
        <>
            <form
                id="admin-form"
                onSubmit={handleAdminFormSubmit}
            >
                <div className="form-group mb-3">
                    <label htmlFor="clientname"><strong>Client Name:</strong></label>
                    <input
                        type="text"
                        value={clientName}
                        onChange={handleClientNameChange}
                        name="clientName"
                    >
                    </input>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="ipaddress"><strong>IP Address:</strong></label>
                    <input
                        type="text"
                        value={ipAddress}
                        onChange={handleIpAddressChange}
                        name="ipAddress">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="dateadded"><strong>Date Added:</strong></label>
                    <input
                        type="text"
                        value={dateAdded}
                        onChange={handleDateAddedChange}
                        name="dateAdded">
                    </input>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="allowediprange"><strong>Allowed IP Range:</strong></label>
                    <input
                        type="text"
                        value={allowedIpRange}
                        onChange={handleAllowedIpRangeChange}
                        name="allowedIpRange">
                    </input>
                </div>
                <div className="form-group mb-3">
                    <label><strong>Client Public Key:</strong></label>
                    <input
                        type="text"
                        value={clientPublicKey}
                        onChange={handleClientPublicKeyChange}
                        name="clientPublicKey">
                    </input>
                </div>
                <div className="form-group mb-3">
                    <label><strong>Client Private Key:</strong></label>
                    <input
                        type="text"
                        value={clientPrivateKey}
                        onChange={handleClientPrivateKeyChange}
                        name="clientPrivateKey">
                    </input>
                </div>
                <button className="btn bg-dark text-light">Submit</button>
            </form>
            <h3>Current Status:</h3><br/>
            <h4>{status}</h4>
            <button className="btn bg-alert text-alert" onClick={restartService}>Restart WireGuard Service</button>
        </>
    )
}

export default AdminHome;

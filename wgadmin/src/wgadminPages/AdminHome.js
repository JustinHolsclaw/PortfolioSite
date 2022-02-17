import { useState } from "react";

function AdminHome() {
    const [clientName, setClientName] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [dateAdded, setDateAdded] = useState('');
    const [allowedIpRange, setAllowdIpRange] = useState('');
    const [clientPublicKey, setClientPublicKey] = useState('')
    const [clientPrivateKey, setClientPrivateKey] = useState('')
    const handleAdminFormSubmit = () => {

    };

    const handleClientNameChange = event => {
        setclientname(event.target.value)
    }
    const handleIpAddressChange = event => {
        setclientname(event.target.value)
    }
    const handleDateAddedChange = event => {
        setclientname(event.target.value)
    }
    const handleAllowedIpRangeChange = event => {
        setclientname(event.target.value)
    }
    const handleClientPublicKeyChange = event => {
        setclientname(event.target.value)
    }
    const handleClientPrivateKeyChange = event => {
        setclientname(event.target.value)
    }

    return (
        <>
            <form
                id="admin-form"
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
            </form>
        </>
    )
}

export default AdminHome;

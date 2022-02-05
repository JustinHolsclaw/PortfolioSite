function AdminHome() {


    var handleAdminFormSubmit = () =>{
        
    }
    return (
        <>
            <form
                id="admin-form"
                >
                <div className="form-group mb-3">
                    <label htmlFor="clientname"><strong>Client Name:</strong></label>
                    <input type="text"></input>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="ipaddress"><strong>IP Address:</strong></label>
                    <input type="text"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="dateadded"><strong>Date Added:</strong></label>
                    <input></input>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="allowediprange"><strong>Allowed IP Range:</strong></label>
                    <input></input>
                </div>
                <div className="form-group mb-3">
                    <label><strong>Client Public Key:</strong></label>
                    <input></input>
                </div>
                <div className="form-group mb-3">
                    <label><strong>Client Private Key:</strong></label>
                    <input></input>
                </div>
            </form>
        </>
    )
}

export default AdminHome;

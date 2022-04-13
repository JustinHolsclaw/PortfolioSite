import { useState } from "react";
import dog from "../Images/doggy.jpg";

function Profile() {

    const [profileImage, setProfileImage] = useState(dog);
    const [description, setDescription] = useState("hello there");
    const [username, setUserName] = useState("Justin Holsclaw");
    const submitImage = () => {

    }

    return (
        <div>
            <div className="row text-center">
                <h1 className="col mt-2">{username}</h1>
                <div className="col" />
            </div>
            <div className="row">
                <div className="col text-center">
                    <img className="rounded float-left mt-2" src={profileImage}></img>
                </div>
                <div className="col scrollbar-primary">
                    <p className="p">{description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-dark mt-4" onClick={submitImage} value={profileImage}>Change Image</button>
                </div>
                <div className="col" />
            </div>
        </div>
    )
}

export default Profile;
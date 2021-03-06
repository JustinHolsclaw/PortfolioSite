import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Project from "./Views/Project";
import ContactMe from "./Views/ContactMe";
import Login from "./Components/Login/Login";
import Secure from "./Components/Secure/Secure";
import Logout from "./Components/Secure/Logout";
import BlogPost from "./Views/BlogPost"
import Profile from "./Views/Profile";

const MainSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resume" />
      <Route path="/ContactMe" element={<ContactMe />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Secure" element={<Secure />} />
      <Route path="/Logout" element={<Logout/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/BlogPost" element={<BlogPost/>}/>
    </Routes>
  );
};

export default MainSwitch;

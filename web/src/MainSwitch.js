import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Project from "./Views/Project";
import ContactMe from "./Views/ContactMe";
import Login from "./Components/Login/Login";

const MainSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resume" />
      <Route path="/ContactMe" element={<ContactMe />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default MainSwitch;

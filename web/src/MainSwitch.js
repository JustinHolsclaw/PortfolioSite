import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Views/Home";
import Project from "./Views/Project";
import ContactMe from "./Views/ContactMe"
const MainSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project/>}/>
        <Route path="/resume" />
        <Route path="/ContactMe" element={<ContactMe/>}/>
      </Routes>
    </Router>
  );
};

export default MainSwitch;

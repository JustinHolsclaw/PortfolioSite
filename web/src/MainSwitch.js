import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Views/Home";
import Project from "./Views/Project";
const MainSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project/>}/>
        <Route path="/resume" />
      </Routes>
    </Router>
  );
};

export default MainSwitch;

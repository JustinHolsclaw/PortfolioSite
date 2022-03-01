import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Project from "./Views/Project";
import ContactMe from "./Views/ContactMe";
import Login from "./Components/Login/Login";

// const AuthorizedRoute = ({ children, isAuthorized, ...rest }) => {
//   if (!isAuthorized) {
//     AuthService.signinRedirect();
//     return <Route {...rest}>{children}</Route>;
//   } else {
//     return <Route {...rest}>{children}</Route>;
//   }
// };

// const AdminRoute = ({ children, isAdmin, ...rest }) => {
//   if (isAdmin === true) {
//     return <Route {...rest}>{children}</Route>;
//   } else {
//     return (
//       <Route {...rest}>
//         <UnAuthorized />
//       </Route>
//     );
//   }
// };

const MainSwitch = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkIfLoggedIn());
  // }, [dispatch]);
  // const isAuthenticated = useStoreSelector((state) => state.auth.isLoggedIn);
  // const isAdmin = useStoreSelector((state) => state.auth.isAdmin);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resume" />
      <Route path="/ContactMe" element={<ContactMe />} />
      <Route path="/Login" element={<Login />} />
      {/* <AuthorizedRoute > */}
        <Route path="/Secure" element={<Secure />} />
      {/* </AuthorizedRoute> */}
    </Routes>
  );
};

export default MainSwitch;

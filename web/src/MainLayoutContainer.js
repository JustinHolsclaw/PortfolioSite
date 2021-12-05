import NavBar from "./NavBar";
import SocialMediaButtons from "./SocialMediaButtons";
import MainSwitch from "./MainSwitch";

const MainLayoutContainer = () => {
  return (
    <>
      <div className="row m-0 p-0" id="top-nav">
        <NavBar />
      </div>
      <div className="row m-0 p-0">
        <div className="col mt-2" id="body">
          <div className="container">
            <MainSwitch />
          </div>
        </div>
      </div>
      <div className="row m-0 p-0" id="footer">
        <SocialMediaButtons />
      </div>
    </>
  );
};

export default MainLayoutContainer;

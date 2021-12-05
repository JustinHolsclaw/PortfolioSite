import AboutMe from "../Components/Home/AboutMe";
import HighLightedSkills from "../Components/Home/HighLightedSkills";

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <AboutMe />
        </div>
      </div>
      <br />
      <div className="row bg-white rounded d-flex justify-content-center">
        <HighLightedSkills />
      </div>
      <br />
    </div>
  );
}
export default Home;
import JustinHolsclaw from "../../Images/JustinHolsclaw.png";

function AboutMe() {
  const descriptionText =
    "A Software Engineer with both experience and a degree in Software Engineering.";
  return (
    <div className="row p-0">
      <div className="col justinimage">
        <img
          className="img-fluid shadow-lg start"
          src={JustinHolsclaw}
          alt=""
        ></img>
      </div>
      <div className="col shadow-lg ml-auto d-flex align-items-center">
        <p className="h2 text-center">
          <i><strong>{descriptionText}</strong></i>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

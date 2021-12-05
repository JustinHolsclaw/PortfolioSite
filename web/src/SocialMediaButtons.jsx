function SocialMediaButtons() {
  return (
    <>
      <div className="row ">
        <div className="col d-flex justify-content-center">
          <div className="mx-5 mt-4">
            <button
              href="https://github.com/JustinHolsclaw"
              className="fa fa-github"
            ></button>
          </div>
          <div className="mx-2 mt-4">
            <button
              href="https://www.facebook.com/justin.holsclaw"
              className="fa fa-facebook"
            ></button>
          </div>
          <div className="mx-5 mt-4">
            <button
              href="https://www.linkedin.com/in/justin-holsclaw-79116419a/"
              className="fa fa-linkedin"
            ></button>
          </div>
        </div>
      </div>
      <div>
        <br />
        <p className="text-center">
          <strong>&copy; Justin Holsclaw 2021</strong>
        </p>
      </div>
    </>
  );
}

export default SocialMediaButtons;

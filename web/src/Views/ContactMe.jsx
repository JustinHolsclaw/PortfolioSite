import axios from "axios";

const Contact_Form = () => {

    
  return (
    <>
      <form
        id="contact-form"
        onSubmit={console.log("tried to submit")}
        method="POST"
      >
        <div className="form-group mb-3">
          <label htmlFor="name"><strong>Name</strong></label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1"><strong>Email address</strong></label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message"><strong>Message</strong></label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-style">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact_Form;

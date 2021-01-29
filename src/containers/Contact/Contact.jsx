import React from "react";
import "./Contact.css";

const Contact = (props) => {
  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   // api call
  //   // wait for the call to resolve
  //   // inside .then I want to confirm
  //   //  redirect to home page

  //   props.history.push("about");
  // };
  return (
    <div>
      <form
        className="container-fluid"
        id="form-container"
        action="https://formspree.io/f/meqpdjqp"
        method="post"
      >
        <div className="row">
          <div className="col-sm">
            <h3 id="form-heading">Let's Work Together!</h3>

            <div className="form-group">
              {/* <form
                action="mailto:bethpresten@gmail.com"
                method="post"
                enctype="text/plain"
              /> */}
              <input
                type="text"
                className="form-control"
                // id="formGroupExampleInput"
                placeholder="Name"
                name="Name"
                id="name"
              />
              {/* </div> */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  // id="formGroupExampleInput2"
                  placeholder="Email address"
                  name="Email"
                  id="_replyto"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  // id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                  name="Message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" value="Send">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;

import React from "react";

const Contact = (props) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // api call
    // wait for the call to resolve
    // inside .then I want to confirm
    //  redirect to home page

    props.history.push("about");
  };
  return (
    <div>
      <h1>This is my contact page</h1>
      <button className="btn btn-primary" onClick={handleSubmitForm}>
        Submit Form
      </button>
    </div>
  );
};

export default Contact;

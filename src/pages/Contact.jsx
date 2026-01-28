import React from "react";

export const Contact = () => {
  //for submit data of user 
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData.entries()));

    // Clear input data after submit the form 
    event.target.reset();
  };

  return (
    //Heading of page 
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="name"
          />

          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

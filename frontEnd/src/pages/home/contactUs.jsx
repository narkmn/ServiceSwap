import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u6appri",     // Replace with your actual ID
        "template_1uqsy0f",    // Replace with your actual template
        form.current,
        "vDmD3N6n7BQKU-EBM"      // Replace with your public key
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" name="user_name" className="form-control" id="name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" name="user_email" className="form-control" id="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" name="subject" className="form-control" id="subject" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" className="form-control" id="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Send Message</button>

        {statusMessage && (
          <p className="mt-3 text-center text-success">{statusMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;

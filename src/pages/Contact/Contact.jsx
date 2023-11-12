import React, { useState } from "react";
import "../../styles/contact.css";
import img1 from "../../assets/images/contact/img1.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="container contact-container">
      <h1 className="title">Contact Us</h1>
      <hr style={{ border: "1px solid #5A5A5A" }} />
      <section className="row contact-main mx-auto p-3 p-md-4 h-100">
        <div className="col-md-6 px-0 pe-md-4">
          <img className="w-100 h-100" src={img1} alt="" />
        </div>
        <div className="col-md-6 ps-md-4 mt-4 m-md-0 contact-content-section h-100 text-center py-4">
          {step === 1 && (
            <>
              <h1>Hello, somebody there?</h1>
              <p>
                Note that we strive to respond to all inquiries within a
                timeframe of 24 to 72 hours.
              </p>
              <p>Please always check your spam folder.</p>

              <div className="mt-5">
                <input
                  className="contact-input mt-4"
                  type="text"
                  placeholder="Subject"
                />
                <input
                  className="contact-input mt-4"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="contact-input mt-4"
                  type="email"
                  placeholder="E-mail"
                />
                <textarea
                  className="contact-input mt-4 py-2 border-0"
                  style={{ minHeight: "100px" }}
                  name="message"
                  placeholder="Your message"
                ></textarea>

                <button
                  onClick={() => setStep(2)}
                  type="submit"
                  className="contact-send-btn mt-4"
                >
                  SEND
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <div className="contact-second-step">
              <h6>Your message has been sent successfully. </h6>
              <p>
                Please allow our team 24 to 72 hours to respond to your inquiry.
                Additionally, remember to check your spam folder for our
                response.
              </p>
              <Link to="/">
                <button className="contact-return-btn mt-4">Return Home</button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;

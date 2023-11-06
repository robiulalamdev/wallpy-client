import React from "react";
import leftright from "../../assets/left_light.png";
import { Link } from "react-router-dom";

const ConfirmationEmail = () => {
  return (
    <>
      <div className="bgShadowTop pt_85">
        <div className="container auth_Container">
          <div className="row">
            <div className="col-3 col-md-1 pe-0">
              <div className="text-center">
                <Link className="backBtn text-nowrap" to="/forgetpassword">
                  <img className="me-2" src={leftright} alt="Left Arrow" />
                  Back
                </Link>
              </div>
            </div>
            <div className="col-md-11">
              <div className="brightBg">
                <div className="row">
                  <div className="col-md-6">
                    <div className="imgLogin confirmation_bg"></div>
                  </div>

                  <div className="col-md-6">
                    <div style={{ padding: "20px" }}>
                      <h1>THE WALLPAPER SOCIETY</h1>
                      <div>
                        <div style={{ marginBottom: "240px" }}>
                          <p
                            className="fontBak"
                            style={{
                              marginTop: "190px",
                              fontSize: "12px",
                              color: "#373737",
                            }}
                          >
                            Please check your email for further instructions on
                            resetting your password. If you don't see an email
                            from us, please check your spam folder.
                          </p>
                          <div className="text-center mt-5">
                            <Link className="text-white darkBtn" to="/">
                              Return Home
                            </Link>
                          </div>
                        </div>

                        <div className="community d-flex justify-content-center gap-4 align-items-center">
                          <Link to="/">Community Rules</Link>
                          <Link to="/">Privacy Policy</Link>
                          <Link to="/">Terms and Conditions</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationEmail;

import React from "react";
import leftright from "../../assets/left_light.png";
import { Link } from "react-router-dom";

const ForgetEmail = () => {
  return (
    <>
      <div className="bgShadowTop pt_85">
          <div className=" container auth_Container">
            <div className="row">
              <div className="col-3 col-md-1 pe-0">
                <div className="text-center">
                  <Link className="backBtn" to="/forgetpassword">
                    <img className="me-2" src={leftright} alt="Left Arrow" />
                    Back
                  </Link>
                </div>
              </div>
              <div className="col-md-11">
                <div className="brightBg">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="imgLogin forgetpass_bg">
                        <p className="text-center">Forgot your e-mail?</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1>THE WALLPAPER SOCIETY</h1>
                        <div
                          className="authtab text-center mx-auto"
                          style={{ marginBottom: "120px" }}
                        >
                          <button className="tabInner">
                            <Link className="text-dark" to="/forgetpassword">
                              Password
                            </Link>
                          </button>
                          <button className="tabInner tabActive">
                            <Link className="text-dark" to="/forgetemail">
                              E-mail
                            </Link>
                          </button>
                        </div>
                        <form action="" style={{ marginBottom: "250px" }}>
                          <label for="username">Username</label>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="We can’t believe you forgot =("
                          />

                          <div className="text-center mt-4">
                            <button type="submit" className="darkBtn mb-2">
                              <Link className="text-white" href="/confirmationEmail">
                              Reset
                              </Link>
                            </button>
                          </div>
                        </form>
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
    </>
  );
};

export default ForgetEmail;

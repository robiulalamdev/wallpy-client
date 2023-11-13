import React, { useEffect, useState } from "react";
import leftright from "../../assets/left_light.png";
import "./Register.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...formData };
    setUsers([...users, user]);
    setFormData(initialFormData);
    // Swal.fire("Registered successfully");
  };
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers) {
      setUsers(savedUsers);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <div className="bgShadowTop pt_85 mx-auto">
        <div className="container mx-auto auth_Container">
          <h1 className="d-md-none register-p-title">THE WALLPAPER SOCIETY</h1>
          <div className="row brightBg px-1 py-3 px-md-3 py-md-4 mx-auto">
            <div className="col-md-6">
              <div className="imgLogin d-flex flex-column justify-content-between align-items-center">
                <p className="d-none d-md-block">Welcome to the Society</p>
                <div className="text-center d-none d-md-block">
                  <span className="mb-2 d-block">Random facts about WPS</span>
                  <div className="addedWall">
                    <span style={{ color: "#FFF" }}>
                      You can get achievement points
                      <br className="d-none d-md-block" /> by uploading
                      wallpapers
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="d-none d-md-block">THE WALLPAPER SOCIETY</h1>
                <div className="authtab text-center mx-auto mt-4">
                  <button className="tabInner">
                    <Link className="text-dark" to="/login">
                      Sign In
                    </Link>
                  </button>
                  <button className="tabInner tabActive ">Sign Up</button>
                </div>
                <form onSubmit={handleSubmit} style={{ marginBottom: "150px" }}>
                  <label for="name">Username</label>

                  <input
                    className="mb-3"
                    type="text"
                    name="username"
                    id="name"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <label for="email">Email</label>
                  <input
                    className="mb-3"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="wallpapers@thewallpapersociety.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label for="password">Password</label>
                  <input
                    className=""
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****************"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div className="text-center mt-4">
                    <button type="submit" className="darkBtn mb-2">
                      Sign Up
                    </button>
                  </div>
                </form>

                <div className="community d-flex justify-content-center gap-4 align-items-center mt-5">
                  <Link to="#">Community Rules</Link>
                  <Link to="#">Privacy Policy</Link>
                  <Link to="#">Terms and Conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

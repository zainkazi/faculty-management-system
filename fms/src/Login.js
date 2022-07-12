import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const axios = require("axios");

const Login = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://localhost:4000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.length > 0) {
          if (response.data[0].access_type == 0) {
            navigate("/admin");
          } else if (response.data[0].access_type == 1) {
            navigate("/teacher");
          } else if (response.data[0].access_type == 2) {
            navigate("/student");
          } else {
            alert("Wrong access type");
          }
        }
        console.log(response);
      });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="wrapper">
      <h1 className="loginpage_title">Faculty Management System</h1>
      <h2>Username</h2>
      <input
        className="input_field"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <h2>Password</h2>
      <input
        className="input_field"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="submit_help login_button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;

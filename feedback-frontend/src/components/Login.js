// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css"; // optional styling file

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/student/login", {
        email,
        password,
      });

      if (res.data.status === "success") {
        localStorage.setItem("token", res.data.data.token);
        setMessage("Login successful!");
        navigate("/feedback"); // go to feedback page
      } else {
        setMessage(res.data.error || "Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error logging in");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>

          <button type="submit">Login</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="auth-switch">
          Not registered? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

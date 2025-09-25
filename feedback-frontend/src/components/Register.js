
// src/components/Register.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerStudent } from "../api";

export default function Register() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    prn_no: "",
    group_id: "",
    course_id: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      const res = await registerStudent(form);
      if (res.data.status === "success") {
        alert("Registration successful");
        navigate("/login");
      } else {
        alert(res.data.error || "Registration failed");
      }
    } catch {
      alert("Network error");
    }
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      {Object.keys(form).map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.replace("_", " ")}
          value={form[field]}
          onChange={handleChange}
        />
      ))}
      <button onClick={handleRegister}>Register</button>
      <p>
        Already registered? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

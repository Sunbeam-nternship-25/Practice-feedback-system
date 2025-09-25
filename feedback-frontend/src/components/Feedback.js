// src/components/Feedback.js
import React, { useState } from "react";
import axios from "axios";
import "./Feedback.css"; // optional, for extra styling

export default function Feedback() {
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Please login first");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/feedback/insert",
        { feedback_text: feedbackText, rating },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.status === "success") {
        setMessage("Feedback submitted successfully!");
        setFeedbackText("");
        setRating("");
      } else {
        setMessage(res.data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error submitting feedback");
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <h2>Submit Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Feedback</label>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Write your feedback here..."
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

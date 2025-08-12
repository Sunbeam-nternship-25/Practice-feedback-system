const express = require("express");
const db = require("../database"); // your MySQL connection file
const utils = require("../utils");
const jwt = require("jsonwebtoken");
const config = require("../config");

const router = express.Router();

// Register
router.post("/register", (req, res) => {
  const { first_name, last_name, email, password, prn_no, group_id, course_id } = req.body;

  const encryptedPassword = utils.encryptPassword(password);

  const query = `
    INSERT INTO student (first_name, last_name, email, password, prn_no, group_id, course_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.query(query, [first_name, last_name, email, encryptedPassword, prn_no, group_id, course_id], (err, result) => {
    if (err) {
      res.send(utils.createError(err));
    } else {
      res.send(utils.createSucess("Registration successful"));
    }
  });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const encryptedPassword = utils.encryptPassword(password);

  const query = "SELECT * FROM student WHERE email = ? AND password = ?";
  db.query(query, [email, encryptedPassword], (err, students) => {
    if (err) {
      res.send(utils.createError(err));
    } else if (students.length === 0) {
      res.send(utils.createError("Invalid email or password"));
    } else {
      const student = students[0];
      const token = jwt.sign({ id: student.student_id, email: student.email }, config.secret);
      res.send(utils.createSucess({ token }));
    }
  });
});

module.exports = router;

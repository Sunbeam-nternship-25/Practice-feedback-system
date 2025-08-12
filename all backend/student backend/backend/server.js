const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config");
const utils = require("./utils");
const cors = require("cors");

const app = express();

const feedbackRouter = require("./router/feedback");
app.use("/feedback", feedbackRouter);


// 1️⃣ CORS setup - allow frontend requests
app.use(cors({
  origin: "http://localhost:3001", // React frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2️⃣ Token middleware
app.use((request, response, next) => {
  const publicPaths = ["/student/login", "/student/register"];

  // If the current path is public, skip token check
  if (publicPaths.includes(request.path)) {
    return next();
  }

  let token = request.headers["authorization"];
  if (!token) {
    return response.send(utils.createError("token is missing"));
  }

  token = token.replace("Bearer", "").trim();

  try {
    if (jwt.verify(token, config.secret)) {
      const payload = jwt.decode(token);
      request.userInfo = payload;
      return next();
    } else {
      return response.send(utils.createError("Invalid token"));
    }
  } catch (ex) {
    return response.send(utils.createError("Invalid token"));
  }
});

// 3️⃣ Routes
const studentRouter = require("./router/student");
app.use("/student", studentRouter);

// 4️⃣ Start server
app.listen(4000, "0.0.0.0", () => {
  console.log("server is running on port 4000");
});

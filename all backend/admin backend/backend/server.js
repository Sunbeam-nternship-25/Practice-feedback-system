const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config");
const utils = require("./utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
  if (request.url == "/admin/login") {
    next();
  } else {
    let token = request.headers["authorization"];
    if (!token) {
      response.send(utils.createError("token is missing"));
      return;
    }

    token = token.replace("Bearer", "").trim();

    try {
      if (jwt.verify(token, config.secret)) {
        const payload = jwt.decode(token);
        request["userInfo"] = payload;
        next();
      } else {
        response.send(utils.createError("Invalid token"));
      }
    } catch (ex) {
      response.send(utils.createError("Invalid token"));
    }
  }
});



const adminRouter = require("./router/admin");
const feedbackScheduleRouter = require("./router/feedbackSchedule");

app.use("/admin", adminRouter);
app.use("/feedbackSchedule",feedbackScheduleRouter)

app.listen(4001, "0.0.0.0", () => {
  console.log("server is running on port 4001");
});

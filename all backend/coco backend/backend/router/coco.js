const express = require("express");
const db = require("../database");
const utils = require("../utils");
const config = require("../config");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (request, response) => {
  const { email, password } = request.body;

  const statement = `select coco_id
    from coco where email = ? and password = ?`;

  db.pool.query(statement, [email, utils.encryptPassword(password)], (error, cocos) => {
    if (error) {
      response.send(utils.createError(error));
    } else {
      if (cocos.length == 0) {
        response.send(utils.createError("User does not exist"));
      } else {
        console.log(cocos);
        const { coco_id } = cocos[0];

        const payload = {
          coco_id,
        
        };

        try {
          const token = jwt.sign(payload, config.secret);
          response.send(
            utils.createSucess({
              token,
              coco_id,
            })
          );
        } catch (ex) {
          response.send(utils.createError(ex));
        }
      }
    }
  });
});









router.post("/register", (request, response) => {
  const {
    first_name,
    last_name,
    email,
    password
  } = request.body;

  const statement = `insert into coco
    (first_name,last_name,email,password)
    values(?,?,?,?)`;

  db.pool.execute(
    statement,
    [
      first_name,
      last_name,
      email,
      utils.encryptPassword(password),
    ],
    (error, result) => {
      response.send(utils.createResult(error, result));
    }
  );
});




module.exports = router;

const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { User } = require("./models/User");

const config = require("./config/key");

// application/x-www-form-urlencoded 형식의 데이터 가져오기
app.use(bodyParser.urlencoded({ extended: true }));

// application/json 형식의 데이터 가져오기
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("안녕");
});

app.post("/register", (req, res) => {
  // 회원 가입 시 필요한 정보들을 클라이언트에서 가져오면 그것들을 DB에 넣어줍니다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

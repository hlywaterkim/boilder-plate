const mongoose = require("mongoose");

// Schema 작성
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 90,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// Schema를 감싸주는 model
const User = mongoose.model("User", userSchema);

// 다른 파일에서도 사용할 수 있도록 export
module.exports = { User };

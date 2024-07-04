import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import cookie from "cookie";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "password length should be atleast 8 characters"],
  },
  customerId: {
    type: String,
    default: "",
  },
  subscription: {
    type: String,
    default: "",
  },
});
//hashed password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// check password
UserSchema.methods.matchPass = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//sign token
UserSchema.methods.getSignedToken = function (res) {
  const accessToken = JWT.sign({ id: this._id }, process.env.JWT_ACCESS_SEC, {
    expiresIn:process.env.JWT_ACCESS_EXP,
  });
  const refreshToken = JWT.sign(
    { id: this._id },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: process.env.JWT_REFRESH_EXP }
  );
  res.cookie("refreshToken", ` ${refreshToken}`, {
    maxAge: 86400 * 7000,
    httpOnly: true,
  });
};

 const  User = mongoose.model("User", UserSchema);

export default User;
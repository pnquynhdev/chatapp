import User from "../models/user.model.js";

export const signupController = async (req, res) => {
  const { fullName, userName, password, confirmPassword, gender } = req.body;
  // const user = await User.findOne({ userName });
  const newUser = new User({
    fullName,
    userName,
    password,
    gender
  });
  await newUser.save();
  res.json({
    _id: newUser._id,
    fullName: newUser.fullName,
    userName: newUser.userName
  });
};
export const loginController = (req, res) => {
  res.send("login");
};
export const logoutController = (req, res) => {
  res.send("logout");
};

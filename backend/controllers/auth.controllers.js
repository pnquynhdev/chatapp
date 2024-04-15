import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
// import generateTokenAndSetCookie from "../utils/generateToken.js";
/**
 * SIGN UP
 */
export const signupController = async (req, res) => {
  try {
    const {
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
      profilePicture = "",
    } = req.body;
    /**
     * Check if password & confirmPassword match
     */
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findOne({ userName });
    /**
     * Check if Username already exists
     */
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    /**
     * HASH PASSWORD
     */
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePicture,
    });
    if (newUser) {
      // generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePicture: profilePicture,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

/**
 * LOGIN
 */
export const loginController = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    /**
     * If user doesn't existed (user? => password: "")
     */
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    // generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullName,
      username: user.userName,
      password: user.password,
      profilePic: user.profilePicture,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * LOGOUT
 */
export const logoutController = (req, res) => {
  try {
    // res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

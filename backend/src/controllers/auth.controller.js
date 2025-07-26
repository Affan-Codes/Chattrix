import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, password, fullname } = req.body;

  try {
    if (!email || !password || !fullname) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters!" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already exists, please use a different one!" });
    }

    const avatarIdx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${avatarIdx}`;

    const newUser = await User.create({
      email,
      fullname,
      password,
      profilePic: randomAvatar,
    });

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    res.cookie("jwt", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true, // prevent XSS attacks
      sameSite: "strict", // prevent CSRF attacks
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.log("Error in signup controller: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const login = async (req, res) => {
  res.send("Sign In");
};

export const logout = async (req, res) => {
  res.send("Sign Out");
};

import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    //1. Destructure name,email, paswd from req.body

    const { name, email, password } = req.body;

    //2. All fields require validation

    if (!name.trim()) {
      return res.json({ error: "Name is required" });
    }
    if (!email) {
      return res.json({ error: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be atleast 6 characters long" });
    }
    //3. Check email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: "Email already taken" });
    }
    // 4.Hash the password
    const hashedPassword = await hashPassword(password);

    //5. Register User
    const user = await new User({
      name,
      email,
      password: hashedPassword,
    }).save();
    // 6. Create signed jwt
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    //7. Send response
    res.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    //1. Destructure email, paswd from req.body

    const { email, password } = req.body;

    //2. All fields require validation

    if (!email) {
      return res.json({ error: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be atleast 6 characters long" });
    }
    //3. Check email is valid
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found" });
    }
    // 4.Compare the password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({ error: "Wrong password" });
    }

    // 5. Create signed jwt
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    //6. Send response
    res.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

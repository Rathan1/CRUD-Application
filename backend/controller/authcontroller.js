import UserAuth from "../models/userauth.js";

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserAuth.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }
    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
};

export const Register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await UserAuth.findOne({ username });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }
    const newUser = new UserAuth({ username, password });
    await newUser.save();
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: "Registration Failed" });
  }
};

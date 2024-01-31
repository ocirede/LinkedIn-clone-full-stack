import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.json({ success: true, newUser });
  } catch (error) {
    console.log("🚀 ~ error in Registering:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const handleSignIn = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched || !user)
      return res.status(400).send("Wrong username or password");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.json({ token, user });
  } catch (error) {
    console.log("🚀 ~ error in sigIn:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const fetchLoggedUser = async (req, res) => {
  try {
    const userId = req.user.id;
    // const userId = req.params.id;
    const user = await User.findOne({ _id: userId });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
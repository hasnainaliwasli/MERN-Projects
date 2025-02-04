import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';

const SignUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created Successfully", user: {
        _id: createdUser._id,
        email: createdUser.email,
        fullname: createdUser.fullname
      }
    });
  } catch (error) {
    console.log("Error in user creating", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found, return an error
    if (!user || !user.password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password with hashed password
    const isMatch = await bcryptjs.compare(password, user.password);

    // If password doesn't match, return error
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Successful login response
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in the login:", error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
};


export { SignUp, SignIn };

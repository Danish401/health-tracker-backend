const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    user.save();
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    if (user.password != password) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }
    res.status(200).json({ success: true, message: "login" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

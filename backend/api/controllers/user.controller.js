import User from "../models/users";

const userProfile = async (req, res) => {
  const email = req.query.email;
  const profile = await User.findOne({ email });
  try {
    if (profile) {
      res.json(profile);
    }
  } catch (error) {
    res.json(error);
  }
};

export { userProfile };

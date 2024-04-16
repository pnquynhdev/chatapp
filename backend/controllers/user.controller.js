import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const { userName } = req.body;
		const user = await User.findOne({ userName });
		const loggedInUserId = user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
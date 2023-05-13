const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
	{
		gameId: {
			type: String,
		},
		userId: {
			type: String,
		},
		username: {
			type: String,
		},
		website: {
			type: String,
		},
		gameName: {
			type: String,
		},
		gameImgUrl: {
			type: String,
		},
		gameRating: {
			type: String,
		},
		developers: {
			type: [String],
		},
		releaseDate: {
			type: String,
		},
	},
	{ timestamps: true }
);

const gameModel = mongoose.model("savedGames", gameSchema);

module.exports = gameModel;

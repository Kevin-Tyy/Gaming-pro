const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const jwtAuth = (req, res, next) => {
	const header = req.headers["authorization"];

	if (typeof header !== "undefined") {
		const bearer = header.split(" ");
		const token = bearer[1];
		if (!token) {
			res.status(403).send({
				msg: "User not logged in, token not provided",
			});
		} else {
			try {
				const data = jwt.verify(token, jwtSecret);
				if (!data) {
					res.status(401).send({ msg: "Invalid token" });
				} else {
					req.data = data;
					next();
				}
			} catch (err) {
				if (
					err.name === "JsonWebTokenError" &&
					err.message === "jwt malformed"
				) {
					return res
						.send({
							msg: "Invalid authentication token. Please log in again.",
							status : 'bad'
						});
				} else {
					return res

						.send({
							msg: "An unexpected error occurred. Please try again later.",
							status : 'bad'
						});
				}
			}
		}
	} else {
		return res
			.status(403)
			.send({ msg: "No token found... So no access granted" });
	}
};
module.exports = jwtAuth;

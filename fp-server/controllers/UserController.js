const User = require('../models/Users');
const encrypt = require('../encrypt')
const decrypt = require('../decrypt')
const jwt = require('jsonwebtoken')


module.exports = {

	registerUser: function (req, res) {

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		if (!req.body.userName || !req.body.fullName || !req.body.password || !req.body.age) {
			return res.json({ status: 422, error: 'Incomplete parameters in request' });
		}

		encrypt(req.body.password).then(function (hashPassword) { // Encrypt password before registering
			var userData = {
				userName: req.body.userName,
				fullName: req.body.fullName,
				password: hashPassword,
				age: +req.body.age
			}
			User.create(userData, function (err, response) {
				if (err) {
					console.log(err);
					return res.json({ status: 500, error: 'Error creating a record in the db' });
				}

				return res.json(response);
			});
		})
	},

	loginUser: function (req, res) {
		if (!req.body.userName || !req.body.password) {
			return res.json({ status: 422, error: "username and password is required" });
		}

		User.findOne({ userName: req.body.userName }).select('-versionKey').lean().exec(function (err, response) {
			if (err) {
				console.log(err);
				return res.json({ status: 404, error: err });
			}

			if (response) {
				decrypt(req.body.password, response.password).then(function (validity) {
					if (validity) {
						jwt.sign(response.userName, 'nananabatman', function (err, encryptedKey) {
							if (err) {
								console.log('error while signing token', err)
							}

							delete response.password;
							delete response._id;
							delete response.__v;

							response.token = encryptedKey;
							return res.json(response);
						})
					} else {
						return res.json(401, { status: 401, error: 'invalid password' });
					}
				});
			} else {
				return res.json({ status: 401, error: 'invalid username' });
			}
		});
	},

	postTestController: function (req, res) {
		console.log('postTestController has been invoked...');
		return res.json({ data: 'Successfully into postTestController' });
	}
}
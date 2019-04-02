const mongoose = require('mongoose');
const express = require('express');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../config/config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

var userSchema = mongoose.Schema({
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	username: {
		type: String,
		index: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	apiOne : {
		name : String,
		action: Number,
		complement : String,
		status : Boolean
	},
	apiTwo: {
		name : String,
		reaction: Number,
		complement : String,
		complementTwo : String
	},
	inter : [{
		nameApi : String,
		status : Boolean
	}]
})

userSchema.methods = {
	authenticate: function (password) {
		return passwordHash.verify(password, this.password);
	},
	getToken: function () {
		return jwt.encode(this, config.secret);
	}
}

module.exports = mongoose.model('User', userSchema);
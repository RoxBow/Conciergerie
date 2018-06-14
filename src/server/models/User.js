'use strict';

const mongoose = require('mongoose');
const Image = require('./Image');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: {
      type: String,
      required: [true, "can't be blank"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      unique: true,
      trim: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    avatar: { type: Schema.Types.ObjectId, ref: 'Image' },
    emailId: String,
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);
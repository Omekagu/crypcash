const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    account_balance: { type: Number, required: true },
    account_number: { type: Number, required: true },
    registration_date: { type: String, default: Date.now() },
    userRef: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('user', UserSchema);

module.exports = User;

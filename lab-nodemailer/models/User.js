const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  status: {
    String, 
    enum: ['Pending Confirmation', 'Active'], 
    default: 'Pending confirmation'
},
confirmationCode: Number, unique:true,
email:String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/KitchenExp')
.then(() => console.log('connected to kichen DB')).catch(err => console.error(err));

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserExpSchema = new mongoose.Schema({
  goods: {
    type: String,
    required: true
  },
  cost:{
    type:Number,
    require:true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user' // Use 'user' instead of 'User'
  }
});

const User = mongoose.model('user', UserSchema);
const UserExp = mongoose.model('userExp',UserExpSchema)

module.exports =User

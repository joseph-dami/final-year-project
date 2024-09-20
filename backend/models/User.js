import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username : { type : String },
  email : { type : String },
  department : { type : String },
  result : { type : Array, default : []},
  attempts : { type : Number, default : 0},
  points : { type : Number, default : 0},
  achieved : { type : String, default : ''},
  createdAt : { type : Date, default : Date.now}
});

const User = new mongoose.model("User", UserSchema)

export default User

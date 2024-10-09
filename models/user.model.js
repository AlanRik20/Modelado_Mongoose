import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String, required: true},
    email:{type:String, required:true },
    password:{type:Number, required:true}
})

const User = mongoose.model('Users', userSchema);

export default User
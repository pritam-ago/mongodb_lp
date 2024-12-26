import mongoose from "mongoose";
import User from "./models/User.js";

mongoose.connect("mongodb+srv://pritam:2CQZ1T2RlNig9zIV@mongooselp.o6gtn.mongodb.net/mongooseTesting?retryWrites=true&w=majority");

// const newUser = new User({
//     name : "Vikas",
//     email : "pritam@gmail.com",
//     age : 18,
//     hobbies : ["coding", "being alive"]
// });

// await newUser.save();

const newUser = await User.create({
    name : "Pritam",
    email : "vikas1@gmail.com",
    age : 28,
    hobbies : ["blockchain", "cats veti"]
});

newUser.email = "vikas3@gmail.com";
await newUser.save();

// const firstUser = await User.find({name : "Pritam" });
// console.log(firstUser);
const User = require("../model/User");
const mongoose=require("mongoose");

const getUser=async(req,res,next)=>{
   try {
        const result=await User.find();
        res.json(result);
   } catch (error) {
       console.log(error);
   }
}
const createUser=async(req,res,next)=>{
    const users=req.body;
    const user=new User(users);
    try {
        const response=await user.save();
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
    }
}
const getUserById=async(req,res,next)=>{
    // console.log(req.params.id,"params")
    try {
        const result=await User.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.json(error)
    }
}
const editUser=async(req,res,next)=>{
    let user = await User.findById(req.params.id);
    user = req.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}
const deleteUser=async(req,res,next)=>{
    try {
        await User.deleteOne({_id:req.params.id});
        res.json({massage:"delete sucssessfully..."})
    } catch (error) {
        res.json(error);
    }
}
module.exports.deleteUser=deleteUser;
module.exports.editUser=editUser;
module.exports.getUserById=getUserById;
module.exports.createUser=createUser;
module.exports.getUser=getUser;
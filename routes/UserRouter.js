const express=require("express");
const route=express.Router();
const UserController=require("../controller/UserController.js");


route.get("/",UserController.getUser);
route.post("/add",UserController.createUser);
route.get("/:id",UserController.getUserById);
route.put("/:id",UserController.editUser);
route.delete("/:id",UserController.deleteUser);


module.exports =route;
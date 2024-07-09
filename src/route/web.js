import express from "express";
import homeController from "../controller/homeController"
import userController from "../controller/userController"
import CRUDuserController from "../controller/CRUDuserController"
import learnCRUD from "../controller/learnCRUD"
let router=express.Router();

let initwebroute=(app)=>{
    router.get("/home",homeController.homePage)
    router.get("/crud",homeController.crud)
    router.post("/post-crud",homeController.postcrud)
    router.get("/",(req,res)=>{
    res.send("hellowww");
    });
    // api user
    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users",userController.handleGetAllUser)
    router.post('/api/create-new-user',userController.createUser)
    router.put("/api/edit-user",userController.handleEditUser)
    router.delete("/api/delete-user",userController.handleDeleteUser)
    router.get("/api/allcode",userController.getAllCode)

    router.get("/sendview",learnCRUD.sendview)
    // api recode crudY
    
    router.get("/api/allcode2",CRUDuserController.getAllCodes)
    router.post("/api/create-user-crud",CRUDuserController.createUser)
    return app.use("/",router);


    
   
}
module.exports=initwebroute;
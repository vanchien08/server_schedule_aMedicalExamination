import userservice from '../service/userService'
import crudservice from '../service/CRUDservice'
// check email exist
// compare password
let handleLogin= async(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;

    if(!email || !password)
    {
        return res.status(500).json({
            errCode:1,
            message:"missing input"
        })
    }

    let userdata= await userservice.handleUserLogin(email,password);
    return res.status(200).json({
        errCode:userdata.errCode,
         message:userdata.errMessage,
        // youremail: email,
        // test:"testttt"
       // : userdata.user
        user : userdata.Data ? userdata.Data : {L:"no user"}
    })

}
let handleGetAllUser = async(req,res)=>{
    let id =req.query.id; // all , single
    if(!id){
        return res.status(200).json({
            errCode:1,
            errMessage:'Missing ',
            users:[]
        })
    }
    let users= await userservice.getAllUser(id);
  
    return res.status(200).json({
        errCode:0,
        errMessage:'OK',
        users
    })
}
let createUser=async(req,res)=>{
    let message= await userservice.createNewUser(req.body);
  //  console.log(message);
    return res.status(200).json(message);

}
let handleDeleteUser=async(req,res)=>{
    if(!req.body.id){
        return res.status(200).json({
            errCode:1,
            errMessage:"missing id"
        })
    }
    let message= await userservice.deleteUser(req.body.id);
  //  console.log(message);
    return res.status(200).json(message);
}
let handleEditUser=async(req,res)=>{
    let data=req.body;
    let message= await crudservice.updateUser(data);
    return res.status(200).json(message);
}
let getAllCode=async(req,res)=>{
    try {
        let type=req.query.type;
       let data=await userservice.getAllCodeService(type);
       return res.status(200).json(data);
    } catch (error) {
        console.log('get all code error',error)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from sever!'
        })
    }
}
module.exports = {
    handleLogin,handleGetAllUser,createUser,handleEditUser,handleDeleteUser,getAllCode
};


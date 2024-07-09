import db from '../models/index'
import bcrypt from "bcryptjs"
const salt = bcrypt.genSaltSync(10);
let getAllCodes =(typeInput)=>{
    return new Promise( async(resolve, reject) => {
        try {
            let res={};
            if(!typeInput)
            {
                res.errCode=1;
                res.errMessage="missing paremeter!";
            }
            else{
            

                let allcode=await db.Allcode.findAll({
                    where : {type:typeInput}
            });
                res.errCode=0;
                res.errMessage="success!";
                res.data=allcode;
            }
            resolve(res);
        } catch (error) {
            reject(error);
        }
    })
}

let createUser=(data)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let hashpw = await hashpassword(data.password);
            await db.User.create({
                email:data.email,
                password:hashpw,
                firstName:data.firstname,
                lastName:data.lastname,
                address:data.address,
                gender:data.gender,
                positionid:data.position,
                roleid:data.role,
                phonenumber:data.phonenumber,
                image:data.image

            })
            resolve("create user success!");
        } catch (error) {
            reject("create user fail!")
        }
    })
}
let hashpassword=(pw)=>{
    return new Promise( async(resolve, reject) => {
        
    
   
    try {
        var hash = await bcrypt.hashSync(pw, salt);
        resolve(hash);
    } catch (error) {
        reject(error);
        console.log('error hash pw',error)
    }
    })
}
module.exports={
    getAllCodes,createUser
}
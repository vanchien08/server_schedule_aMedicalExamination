import db from '../models/index';
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);
let createnewuser=async (data)=>{
    return new Promise( async (resolve, reject) => {
        try {
            let hashpw = await hashpassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashpw,
                firstName: data.firstname,
                lastName: data.lastname,
                address: data.address,
                gender: data.gender === 1 ? true : false,
                roleid: data.roleid,
                phonenumber: data.phonenumber,
              //  positionid: data.positionid,
                // image: data.image
            })
            resolve("create new user success !");

        } catch (error) {
            reject(error);
        }
    })


    
   // console.log('hasshpw>>',hashpw);


}
let hashpassword=(pw)=>{
    return new Promise( async(resolve, reject) => {
        
    
   
    try {
        var hash = await bcrypt.hashSync(pw, salt);
        resolve(hash);
    } catch (error) {
        reject(e);
        console.log('error hash pw',error)
    }
    })
}
let updateUser=async(data)=>{
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.id){
                resolve({
                    errCode:1,
                    errMessage:"missing id!"
                })
            }
            let user= await db.User.findOne({
                where:{id : data.id},
                raw:false
            })
            if(user)
            {
                console.log(user)
                user.firstName=data.firstName;
                user.lastName=data.lastName;
                user.address=data.address;
                await user.save();
               // let users=db.User.findAll();
                resolve({
                    errCode:0,
                    errMessage:"update success!",
                   // datafirstName:data.firstName
                })
            }
            else{
                resolve({
                    errCode:1,
                    errMessage:"not found!"
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports={
    createnewuser,updateUser
}
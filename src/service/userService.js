import db from '../models/index'
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);
let handleUserLogin=(email,password)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let userData={};
            let isExist = await checkUserEmail(email);
            let user= await db.User.findOne({
                where :{ email : email},
                raw: true // define user la object
            });
          //  resolve(userData)
            if(isExist)
            {
                let check = bcrypt.compareSync(password,user.password);
              //let check= password===user.password;
                if(check)
                {
                   
                    delete user.password;
                   userData.Data=user;
                   
                    userData.errCode=0;
                    userData.errMessage="Success !";
                    resolve(userData);
               }
                else{
                
                    userData.errCode=2;
                    userData.errMessage="Incorrect password!";
                    resolve(userData)
                }
                
            }
            else{
            
                userData.errCode=1;
                userData.errMessage="your email isn't exist";
                resolve(userData)
            }
        } catch (error) {
            reject(error)
        }
    })

}
let checkUserEmail=(useremail)=>{
    return new Promise( async(resolve, reject) => {
        try {
            let user= await db.User.findOne({
                where :{ email : useremail}
            });
            if(user){ // trường hợp user != undefine
                resolve(true)
            }
            else{
                resolve(false)
            }
        } catch (error) {
            reject(error);
        }
    })
}
let getAllUser=(userId)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let users='';
            if(userId==='ALL')
            {
                users= await db.User.findAll({
                    raw:true
                    
                })
                users.forEach(a => {
                    delete a.password;
                });
                
            }
           
            if(userId && userId!=='ALL') {
                users= await db.User.findOne({
                    where:{id : userId},
                    raw:true
                })
                delete users.password;
            }
           
            resolve(users)
        } catch (error) {
            reject(error);
        }
    })
}

// let checkPassword= (userpassword)=>{
//     return new Promise(async(resolve, reject) => {
//         try {
//             let user= await db.User.findOne({
//                 where:{password : userpassword}
//             })
//             if(user)
//             {
//                 resolve(true)

//             }
//             else{
//                 resolve(false)
//             }
//         } catch (error) {
//             reject(error);
//         }
//     })
// }
let createNewUser=async(data)=>{
    return new Promise(async(resolve, reject) => {
        try {

            // let checkemail = await checkUserEmail(data.email);
            // if(checkemail===true){
            //     resolve({
            //         errCode:1,
            //         message:'success'
            //     })
            // }

            let hashpw = await hashpassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashpw,
                firstName: data.firstname,
                lastName: data.lastname,
                address: data.address,
                gender: data.agender === 1 ? true : false,
                roleid: data.arole,
                phonenumber: data.phonenumber,
                positionid: data.aposition,
                 image: data.previewImg
            })
            resolve({
                errCode:0,
                errMessage:'ok'
            })
        } catch (error) {
            reject(error)
        }
    })
}
let deleteUser=(iduser)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let user=await db.User.findOne({
                where : {id:iduser },
                raw:false
            })
            if(!user){
                resolve({
                    errCode:2,
                    errMessage:"not found !"
                })
            }
            else{
               // if (user instanceof db.User) {
                    await user.destroy();
                    resolve({
                        errCode: 0,
                        errMessage: "The user is deleted!"
                    });
                // } else {
                //     resolve({
                //         errCode: 3,
                //         errMessage: "Invalid user instance!"
                //     });
                // }
            }
        } catch (error) {
            reject(error)
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
let getAllCodeService=(typeInput)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let res={}
            if(!typeInput)
            {
                resolve({
                    errCode:1,
                    errMessage:'mising typeInput'
                })
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
            reject(error)
        }
    })
}
module.exports={
    handleUserLogin,getAllUser,createNewUser,deleteUser,getAllCodeService
}
import crudservice from '../service/CRUDservice111'

let getAllCodes =async(req,res)=>{
   
    try {
        let type = req.query.type;
        let allcodes= await crudservice.getAllCodes(type)
        return res.status(200).json(allcodes);
    } catch (error) {
        console.log("error from server",error)
        return res.status(200).json({
            errMessage:"error controller"
        })
    }
} 
let createUser= async(req,res)=>{
    try {
        let data=req.body;
        let message = await crudservice.createUser(data);
        return res.status(200).json(message)
    } catch (error) {
        console.log("error from server",error)
        return res.status(200).json(message);
    }
}
module.exports={
    getAllCodes,createUser
}
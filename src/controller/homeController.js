import db from '../models/index';
import CRUDservice from '../service/CRUDservice';
let homePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // đợi cho promise hoàn thành
        // console.log('dataa>>', data);
        // console.log('Số lượng bản ghi:', data.length);
        return res.render('homePage.ejs',{data});
    } catch (error) {
        console.log(error);
        console.log('error  dataa>>');
    }
};
let crud =(req,res)=>{
    return res.render("crud.ejs");
}

let postcrud= async (req,res)=>{
    let message= await CRUDservice.createnewuser(req.body);
    console.log(message)
    return res.send("postcrud");
}
module.exports = {
    homePage,crud,postcrud
};

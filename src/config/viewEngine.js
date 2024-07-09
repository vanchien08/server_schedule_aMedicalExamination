import express from "express";

let configvieweEngine=(app)=>{
    app.use(express.static("./src/public"));
    app.set("view engine","ejs");
    app.set("views","./src/view");
}
module.exports=configvieweEngine;
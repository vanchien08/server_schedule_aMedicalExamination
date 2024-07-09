import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebroute from "./route/web";
import connectDB from "./config/connectDB"
import cors from 'cors'
require('dotenv').config(); // để chạy process.env
let app=express();

app.use(cors({ origin: true }));
// app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

viewEngine(app);
initwebroute(app);
connectDB();

let port=process.env.PORT || 6969;
app.listen(port,()=>{
    console.log("port>>>",port)
})
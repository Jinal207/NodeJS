const express = require("express");
const app=express();
const PORT=7070;

app.get("/",(req,res)=>{
    res.json({msg:"root folder"})
    console.log("root folder");
})

app.get("/login",(req,res)=>{
    res.json({msg:"get login"});
    console.log("login");
})

app.post("/",(req,res)=>{
    res.json({msg:"login page post"});
});

app.listen(PORT,()=>{
    console.log(`server started at port:${PORT}`);
})
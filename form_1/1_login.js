const express = require("express");
const app=express();
const PORT=7070;
app.use(express.json());//to get json data
app.use(express.urlencoded());//to encode the url

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/index.html");//to send the html file to server
})

app.post("/login",(req,res)=>{
    const request=req.body;//to fatch the body of data
    console.log("data fatched:",request);    
});

app.listen(PORT,()=>{
    console.log(`server started at port:${PORT}`);
})


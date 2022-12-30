const fs =require("fs");
fs.readFile("2_file.txt","utf8",(err,data)=>{
if(err)
console.log(err);
else
console.log(data);
});
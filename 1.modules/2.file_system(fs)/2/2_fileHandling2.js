const fs =require("fs");
var content="my name is xyz";
fs.writeFile("2_file2.txt",content,"utf8",(err,data)=>{
if(err)
console.log(err);
else
console.log(data);
});
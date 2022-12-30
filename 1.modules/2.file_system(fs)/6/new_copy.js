const fs=require("fs");

data=fs.readFileSync("2_file3.txt","utf8");
console.log(data);

content=data;
data=fs.writeFileSync("new_copy.txt",content,"utf8");


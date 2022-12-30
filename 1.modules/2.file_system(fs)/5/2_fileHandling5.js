const fs = require("fs");

// fs.rename("2_file.txt","2_fileRename.txt",(err)=>{

//     if (err)
//     console.log(err);
//     else
//     console.log();
// })

// {


// fs.unlink("extra.txt",(err)=>{
// if (err)
// console.log(err);
// })


// fs.stat("2_file5.txt",(err,data)=>{
//     if (err)
//     console.log(err);
//     else
//     console.log(data);
// })


// fs.copyFile("2_file2.txt","copy2.txt",(err)=>{
// if (err)
// console.log(err);
// })

fs.copyFileSync("2_file2.txt","copy3.txt");
















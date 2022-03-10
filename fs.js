let fs = require("fs");
console.log(fs);
let path = require("path");
let newFilePath = path.join(__dirname,"file.txt");
console.log(newFilePath);
// It creates file If doesnot exist else it override
//fs.writeFileSync(newFilePath,"Hello I am a text file");
fs.writeFileSync(newFilePath,"Again writing on created file");

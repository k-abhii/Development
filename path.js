//F:\FJP6_DEV\module2\NODE\path.js
let path = require("path");
console.log(path);
let extensionName = path.extname("F:\FJP6_DEV\module2\NODE\path.js");
console.log(extensionName);
//let baseName =path.basename("F:\FJP6_DEV\module2\NODE\path.js");
//console.log(baseName);
let baseName = path.basename(__filename);
console.log(baseName);
console.log(__dirname);
console.log(__filename);
let dirPath =__dirname;
console.log(dirPath);
let newFilePath=path.join(dirPath,"test.js");
console.log(newFilePath);


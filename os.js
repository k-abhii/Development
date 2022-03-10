const { cp } = require('fs');
let os = require('os');
console.log(os);
console.log(os.hostname());
console.log(os.arch());
console.log(os.userInfo());
//cp.execSync("code");
let content =cp.execSync("node test.js");
console.log("Output of test.js file :"+content);

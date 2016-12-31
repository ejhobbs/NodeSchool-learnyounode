var fs = require('fs');

file = fs.readFileSync(process.argv[2]);
count = (file.toString().match(/\n/g)|| []).length;
console.log(count)

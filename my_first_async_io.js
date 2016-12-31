var fs = require('fs');

file = fs.readFile(process.argv[2], function(err,file){
  count = (file.toString().match(/\n/g)|| []).length;
  console.log(count)
});

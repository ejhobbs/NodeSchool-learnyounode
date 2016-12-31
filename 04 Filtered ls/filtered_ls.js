//mine
var fs = require('fs');

fs.readdir(process.argv[2], function(err, files){
  files.forEach(function(el,i,arr){
    if(el.indexOf("."+process.argv[3])!== -1){
      console.log(el);
    }
  })
})

//official

var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})

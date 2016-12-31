var fs = require('fs');
module.exports = function(dir,ext, callback){
  fs.readdir(dir, function(err, files){
    if(err){
      return callback(err);
    } else {
      array = []
      files.forEach(function(el,i,arr){
        if(el.indexOf("."+ext)!== -1){
          array.push(el);
        }
      })
    }
    return callback(null,array);
  })
}

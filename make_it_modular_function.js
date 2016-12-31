var module = require('./make_it_modular_module.js')

module(process.argv[2],process.argv[3], function(err,data){
  if (err){
    console.log(err);
  }
  data.forEach(function(el,i,array){
    console.log(el);
  });
})

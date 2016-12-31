var http = require('http');
responses = []
for(var i = 2; i < process.argv.length; i++){
  (function(i){
    http.get(process.argv[i], function (response){
      response.on('data', function(data){
        responses[i] = data.toString();
      })
    })
  })(i)
}
console.log(responses)

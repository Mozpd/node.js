
var  http = require('http');

http.get(process.argv[2],function (res) {
    var result = 0;
    res.on('data',function (data) {
        result = result + data;
    });
    res.on('end',function () {
        console.log(result.length);
        console.log(result);
    })

});
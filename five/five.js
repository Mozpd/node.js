var fs = require('fs');
var path = require('path');

fs.readdir('text',function (err,list) {
    if (err) return console.log(err);
    list.forEach(function (t) {
        if (path.extname(t) === '.' + 'txt'){
            console.log(t)
            /*console.log(process.argv[3])*/
        }
    });
   /* console.log(list)*/
});

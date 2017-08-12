var fs = require('fs');
var path = require('path');

function bar(text,txt,callback) {

 fs.readdir(text,function (err,list) {
    if (err) return callback(err);

     thatList=list.filter(function (t) {
       return path.extname(t) === '.' + txt;
    });

     callback(null,list);
})

}
module.exports = bar;

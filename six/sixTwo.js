
var bar = require('./sixOne');

bar('text','txt',function (err,list) {
    if (err) return console.log(err);
    thatList.forEach(function (t) {
        console.log(t)
    })
   /* console.log(list)*/
});
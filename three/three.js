var fs = require('fs');
var str = fs.readFileSync('./txt/test.txt').toString();
var count = str.split('\n').length;
console.log(count);
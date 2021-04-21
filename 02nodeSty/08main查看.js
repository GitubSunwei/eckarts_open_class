var fs = require('fs');

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt')

// 管道读写操作
readerStream.pipe(writerStream);

console.log('操作完毕')
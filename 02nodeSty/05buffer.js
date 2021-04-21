// const buf = Buffer.from('runoob', 'ascii');

// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));

// // 输出 cnVub29i
// console.log(buf.toString('base64'));



// 创建一个长度为 10、且用 0 填充的 Buffer。
// const buf1 = Buffer.alloc(10);
// // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
// const buf2 = Buffer.alloc(10, 3);


// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com");

// console.log("写入字节数 : "+  len);



// buf = Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
// console.log( buf.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
// console.log( buf.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde




const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    console.log('key=>',key, 'value=>',value)
    return value && value.type === 'Buffer' ?
      Buffer.from(value.data) :
      value;
  });
  
  // 输出: <Buffer 01 02 03 04 05>
  console.log(copy);
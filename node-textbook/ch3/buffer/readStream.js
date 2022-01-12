const fs = require('fs');
const readme_path = __dirname + '/readme.txt';
const readStream = fs.createReadStream(readme_path, { highWaterMark: 32}); //보통은 64kbye로 읽어들이기 떄문에 임의로 조작해준다.

const data = [];
readStream.on('data', (chunck) => {
  data.push(chunck);
  console.log(chunck, chunck.length);
});

readStream.on('end', () => {
  console.log(Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error:', err);
});
const fs = require('fs');
const readme_path = __dirname + '/readme.txt';
const writeme_path = __dirname + '//writeme.txt';

const readStream = fs.createReadStream(readme_path);
const writeStream = fs.createWriteStream(writeme_path);
readStream.pipe(writeStream);
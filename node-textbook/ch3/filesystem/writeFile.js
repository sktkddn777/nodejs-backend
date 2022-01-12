const fs = require('fs').promises;

const writeme_path = __dirname + '/readme.txt';

fs.writeFile(writeme_path, "글 입력!!!!")
.then(() => {
  return fs.readFile(writeme_path);
})
.then((data) => {
  console.log(data.toString());
})
.catch((err) => {
  throw err;
});

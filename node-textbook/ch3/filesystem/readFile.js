const fs = require('fs').promises;

const readme_path = __dirname + '/readme.txt';

fs.readFile(readme_path)
.then((data) => {
  console.log(data.toString());
})
.catch((err) => {
  throw err;
});

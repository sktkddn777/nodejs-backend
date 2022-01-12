const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x, y);
}, 'dont use');

dontUseMe(1, 2);

const randomPromise = util.promisify(crypto.randomBytes);

randomPromise(64)
.then((buf) => {
  console.log(buf.toString('base64'));
})
.catch((error) => {
  console.error(error);
})
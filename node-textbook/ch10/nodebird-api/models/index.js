'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
const User = require('./user')(sequelize, Sequelize);
const Post = require('./post')(sequelize, Sequelize);
const Hashtag = require('./hashtag')(sequelize, Sequelize);


db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;


User.associate(db);
Post.associate(db);
Hashtag.associate(db);

module.exports = db;

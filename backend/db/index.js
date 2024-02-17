const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

const db = {};
const sequelize = new Sequelize(process.env.DATABASE_URL);

// get all models from folder /models
fs.readdirSync(`${__dirname}/models`)
    .forEach(file => {
      const model = require(path.join(`${__dirname}/models`, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });

db.User.hasMany(db.Card, {
  foreignKey: 'userId'
})

db.sequelize = sequelize;

module.exports = db;


const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
  // For Heroku deployment
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // For local development
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

module.exports = sequelize;


//old rewritten so that I can deploy to heroku eventually. 
//Use of Let statement make it flexible.
/* 
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize; */
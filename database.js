const Sequelize = require("Sequelize");
require("dotenv").config();
let connection;

connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

module.exports = connection;
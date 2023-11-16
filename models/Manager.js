const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

let Manager = sequelize.define("manager", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    dateHired: DataTypes.DATE
})

module.exports = {
    Manager
}

const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
let Band = sequelize.define("band", {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
});

module.exports = {
    Band
};
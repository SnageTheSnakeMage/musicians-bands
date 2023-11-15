const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song = sequelize.define("song", {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
});

module.exports = {
    Song
};
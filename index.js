const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
const { Manager } =  require("./models/Manager")
// Define associations here

// band and musicians association
Band.hasMany(Musician);
Musician.belongsTo(Band);

Song.belongsToMany(Band, {through: 'SongBands'});
Band.belongsToMany(Song, {through: 'SongBands'});

Manager.belongsTo(Band)
Band.belongsTo(Manager)

module.exports = {
    Band,
    Musician,
    Song,
    Manager
};

const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

// band and musicians association
Band.hasMany(Musician);
Musician.belongsTo(Band);




module.exports = {
    Band,
    Musician,
    Song
};

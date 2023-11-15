const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band = await Band.create({name: 'Led Zeppelin', genre: 'Rock'});
        expect(band.name).toBe('Led Zeppelin');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        await Musician.create({name: 'Robert Plant', instrument: 'Voice'});
        const musician = await Musician.findOne({ where: {instrument: "Voice"}});
        expect(musician.instrument).toBe('Voice');
    })

    test('can create a Song', async () => {
        const song = await Song.create({ title: 'RISK RISK RISK!', year: 2023, length: 5 })
        expect(song.title).toBe('RISK RISK RISK!');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const band = await Band.findOne({where: {name: 'Led Zeppelin'}});
        const updatedBand = await band.update({name: "Rolling Stones"});
        expect(updatedBand.name).toBe('Rolling Stones');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Song', async () => {
        // TODO - test updating a song
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const band = await Band.findByPk(1)
        await band.destroy()
        const deletedBand = await Band.findByPk(1)
        expect(deletedBand).toBe(null);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Song', async () => {
        // TODO - test deleting a song
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})
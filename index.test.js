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

  test("can create a Band", async () => {
    // TODO - test creating a band
    const band = await Band.create({ name: "Led Zeppelin", genre: "Rock", showCount: 600});
    expect(band.name).toBe("Led Zeppelin");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    await Musician.create({ name: "Robert Plant", instrument: "Voice" });
    const musician = await Musician.findOne({ where: { instrument: "Voice" } });
    expect(musician.instrument).toBe("Voice");
  });

  test("can create a Song", async () => {
    const song = await Song.create({
      title: "RISK RISK RISK!",
      year: 2023,
      length: 5,
    });
    expect(song.title).toBe("RISK RISK RISK!");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const band = await Band.findOne({ where: { name: "Led Zeppelin" } });
    const updatedBand = await band.update({ name: "Rolling Stones" });
    expect(updatedBand.name).toBe("Rolling Stones");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    await Musician.create({ name: "bob", instrument: "flute" });
    const musician = await Musician.findOne({
      where: {
        name: "bob",
      },
    });

    const updatedMusician = await musician.update({ instrument: "drums" });
    expect(updatedMusician.instrument).toBe("drums");
  });

  test("can update a Song", async () => {
    // TODO - test updating a song
    await Song.create({
      title: "song",
      year: 2004,
      length: 200,
    });
    const song = await Song.findOne({
      where: {
        year: 2004,
      },
    });

    const updatedSong = await song.update({ title: "better song" });

    expect(updatedSong.title).toBe("better song");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    const band = await Band.findByPk(1);
    await band.destroy();
    const deletedBand = await Band.findByPk(1);
    expect(deletedBand).toBe(null);
  });

  test("can delete a Musician", async () => {
    const musician = await Musician.findByPk(1);
    await musician.destroy();
    const deletedMusician = await Musician.findByPk(1);
    expect(deletedMusician).toBe(null);
  });

  test("can delete a Song", async () => {
    // TODO - test deleting a song
    const song = await Song.findByPk(1);
    await song.destroy();
    const deletedSong = await Song.findByPk(1);
    expect(deletedSong).toBe(null);
  });
  test('Can create a new Band with showcount', async () =>{
    const band = await Band.create({name: "Led Zeppelin", genre: "Rock", showCount: 600});
    expect(band.name).toBe("Led Zeppelin");
    expect(band.genre).toBe("Rock");
    expect(band.showCount).toBe(600);
  });
  //test to define associations of band and musicion
  test('Band and Musician association',  async () => {
    const band = await Band.create({name: 'Queen', genre: 'Rock', showCount: 600});
    const musician = await Musician.create({ name: 'bob', instrument: 'guitar'});

    await band.addMusician(musician);
    expect(band.genre).toBe('Rock');
     const foundBand = await Band.findOne({where: {name: 'Queen'}});
    
    const musicians = await foundBand.getMusicians();
    // console.log(foundBand);
    expect(musicians[0].name).toBe('bob');
  });

  test('Song and Band many-to-many association', async () => {
    const song1 = await Song.create({title: "Song 1", year: 2001, length: 3});
    const song2 = await Song.create({title: "Song 2", year: 2001, length: 7});

    const band1 = await Band.create({name: "The Beatles", genre: "Rock", showCount: 350});
    const band2 = await Band.create({name: "Aerosmith", genre: "Rock", showCount: 200});

    await song1.addBands([band1, band2]);
    await band1.addSongs([song1, song2]);

    const bands = await song1.getBands();
    const songs = await band1.getSongs();

    expect(bands.length).toBe(2);
    expect(songs.length).toBe(2);

    expect(bands[0].name).toBe("The Beatles");
    expect(bands[1].name).toBe("Aerosmith");

    expect(songs[0].title).toBe("Song 1");
    expect(songs[1].title).toBe("Song 2");

  })


});
